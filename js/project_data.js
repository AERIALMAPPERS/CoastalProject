document.addEventListener("DOMContentLoaded", function () {
    const data = {
        "Palghar": {
            "Talasari": {
                "Zai": {
                    "chainageURL": "./data/kmz/JALANA.kml",
                    "ECWURL": "./data/ecw/Dhanu.gmw",
                    "dsmURL": "./data/kmz/JALANA.kml", // Add DSM URL
                    "dtmURL": "./data/kmz/JALANA.kml", // Add DTM URL
                }
            },
            "Dahanu": {
                "Bordi": {
                    "chainageURL": "./data/kmz/thorendfff.kml",
                    "ECWURL": "./data/kmz/JALANA.gmw",
                    "dsmURL": "./data/kmz/thorendfff.kml", // Add DSM URL
                    "dtmURL": "./data/kmz/JALANA.kml", // Add DTM URL
                },
                "Vikasnager": {
                    "chainageURL": "./data/kmz/JALANA.kml",
                    "ECWURL": "./data/ecw/Palghar.gmw",
                    "dsmURL": "./data/kmz/JALANA.kml", // Add DSM URL
                    "dtmURL": "./data/kmz/JALANA.kml", // Add DTM URL
                },
            }
        },
        "thane": {
            "Tthane": {
                "tt1": {
                    "chainageURL": "./data/kmz/JALANA.kml",
                    "ECWURL": "./data/kmz/JALANA.kml",
                    "dsmURL": "./data/kmz/JALANA.kml", // Add DSM URL
                    "dtmURL": "./data/kmz/JALANA.kml", // Add DTM URL
                    "contourURL": "./dwg/Palghar/TALSARI/ZAI/ZAI.dwg",
                }
            },
            "ratnagoti": {
                "ramnage": {
                    "chainageURL": "./data/kmz/JALANA.kml",
                    "ECWURL": "./data/kmz/JALANA.kml",
                    "dsmURL": "./data/kmz/JALANA.kml", // Add DSM URL
                },
                "Vnager": {
                    "chainageURL": "./data/kmz/JALANA.kml",
                    "ECWURL": "./data/ecw/Dhanu.gmw",
                    "dsmURL": "./data/kmz/thorendfff.kml", // Add DSM URL
                }
            }
        }
    };

    // Wait for DOM ready
    $(document).ready(function () {
        setTimeout(function () {
          // Hide the Earth GIF and show the map container
          $('#earthGif').hide();
          $('#map-container').css('display', 'block');
      
          // Initialize Leaflet map
          var map = L.map('map-container').setView([20.5937, 78.9629], 5); // India coordinates
      
          // Base maps
          var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik');
          var stamenMap = L.tileLayer.provider('Stadia.StamenWatercolor');
          var cyclOSMMap = L.tileLayer.provider('CyclOSM');
          var darkMap = L.tileLayer.provider('Stadia.AlidadeSmoothDark');
          var smoothMap = L.tileLayer.provider('Stadia.AlidadeSmooth');
          var imageryMap = L.tileLayer.provider('Esri.WorldImagery');
      
          // Overlay maps
          var geoServerIPPort = 'localhost:8080';
          var geoServerWorkspace = 'GIS';
          var stateLayerName = 'GIS:ind_st';
      
          var indStateLayer = L.tileLayer.wms(
            "http://" + geoServerIPPort + "/geoserver" + geoServerWorkspace + "/wms",
            {
              layers: stateLayerName,
              format: "image/png",
              transparent: true,
              version: "1.1.0",
              tiled: true,
            }
          );
      
          var baseMaps = {
            'OpenStreetMap': osmMap,
            'Stamen Watercolor': stamenMap,
            'CyclOSM': cyclOSMMap,
            'Alidade Smooth Dark': darkMap,
            'Stadia Smooth': smoothMap,
            'World Imagery': imageryMap
          };
      
          var overlayMaps = {
            'India States': indStateLayer
          };
      
          // Add layers and controls
          L.control.layers(baseMaps, overlayMaps).addTo(map);
          osmMap.addTo(map); // Default base map
          indStateLayer.addTo(map); // Default overlay map
          L.control.fullscreen().addTo(map);
          L.Control.geocoder().addTo(map);
      
          // Adding measurement control
          var polylineMeasure = L.control.polylineMeasure({
            position: 'topright',
            unit: 'kilometres',
            showBearings: true,
            clearMeasurementsOnStop: false,
            showClearControl: true,
            showUnitControl: true
          });
          polylineMeasure.addTo(map);
      
          // Adding drawing controls for circles and polygons
          var editableLayers = new L.FeatureGroup();
          map.addLayer(editableLayers);
      
          var drawOptions = {
            position: 'topright',
            collapsed: false,
            edit: {
              featureGroup: editableLayers,
              poly: {
                allowIntersection: false
              }
            },
            draw: {
              polygon: {
                allowIntersection: false,
                showArea: true
              },
              circle: {
                shapeOptions: {
                  color: 'blue'
                },
                showRadius: true,
                metric: true,
                feet: true,
                nautic: false
              }
            }
          };
      
          var drawControl = new L.Control.Draw(drawOptions);
          map.addControl(drawControl);
      
          // Some constant polyline coords:
          const line1coords = [
            { lat: 22.156883186860703, lng: -158.95019531250003 },
            { lat: 22.01436065310322, lng: -157.33520507812503 },
            { lat: 21.391704731036587, lng: -156.17065429687503 },
            { lat: 20.64306554672647, lng: -155.56640625000003 },
            { lat: 19.342244996771804, lng: -155.33569335937503 }
          ];
          const line2coords = [
            { lat: 19.880391767822505, lng: -159.67529296875003 },
            { lat: 17.90556881196468, lng: -156.39038085937503 }
          ];
      
          polylineMeasure.seed([line1coords, line2coords]);

            

           

            const districtSelect = document.getElementById("district");
            const talukaSelect = document.getElementById("taluka");
            const villageSelect = document.getElementById("village");
            const showButton = document.getElementById('ShowButton');
    
            // Populate district dropdown
            for (const district in data) {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            }
    
            // Event listener for district change
            districtSelect.addEventListener('change', function () {
                const selectedDistrict = districtSelect.value;
                talukaSelect.innerHTML = ''; // Clear taluka dropdown
                villageSelect.innerHTML = ''; // Clear village dropdown
    
                if (selectedDistrict) {
                    for (const taluka in data[selectedDistrict]) {
                        const option = document.createElement('option');
                        option.value = taluka;
                        option.textContent = taluka;
                        talukaSelect.appendChild(option);
                    }
                }
            });
    
            // Event listener for taluka change
            talukaSelect.addEventListener('change', function () {
                const selectedDistrict = districtSelect.value;
                const selectedTaluka = talukaSelect.value;
                villageSelect.innerHTML = ''; // Clear village dropdown
    
                if (selectedDistrict && selectedTaluka) {
                    for (const village in data[selectedDistrict][selectedTaluka]) {
                        const option = document.createElement('option');
                        option.value = village;
                        option.textContent = village;
                        villageSelect.appendChild(option);
                    }
                }
            });
    
            // Function to add KML layer to map
            
            let currentKMLLayer = null;
            function addKMLLayer(kmlURL) {
                fetch(kmlURL)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Failed to fetch KML file');
                        }
                        return res.text();
                    })
                    .then(kmltext => {
                        // Create new KML overlay
                        const parser = new DOMParser();
                        const kml = parser.parseFromString(kmltext, 'text/xml');
                        const track = new L.KML(kml);
                        map.addLayer(track);
                        currentKMLLayer = track; // Set current KML layer
    
                        // Adjust map to show the KML
                        const bounds = track.getBounds();
                        map.fitBounds(bounds);
                    })
                    .catch(error => {
                        console.error('Error loading KML file:', error);
                    });
            }
    
            // Event listener for show button
            showButton.addEventListener('click', function (event) {
                event.preventDefault();
    
                const selectedDistrict = districtSelect.value;
                const selectedTaluka = talukaSelect.value;
                const selectedVillage = villageSelect.value;
                const villageData = data[selectedDistrict]?.[selectedTaluka]?.[selectedVillage];
    
                if (selectedDistrict && selectedTaluka && selectedVillage && villageData) {
                    // Remove the current KML layer before adding a new one
                    removeCurrentKMLLayer();
    
                    const chainageCheckbox = document.querySelector('input[name="checkbox1"]:checked');
                    const ecwCheckbox = document.querySelector('input[name="checkbox2"]:checked');
                    const dtmCheckbox = document.querySelector('input[name="checkbox3"]:checked');
                    const dsmCheckbox = document.querySelector('input[name="checkbox4"]:checked');
                    const contourCheckbox = document.querySelector('input[name="checkbox5"]:checked'); // Fix variable name
                    const topoplanCheckbox = document.querySelector('input[name="checkbox6"]:checked');
                    const VillageMapCheckbox = document.querySelector('input[name="checkbox7"]:checked');
                    const APCCheckbox = document.querySelector('input[name="checkbox8"]:checked');
                    const NPCCheckbox = document.querySelector('input[name="checkbox9"]:checked'); // Fix checkbox name
                    const UPCCheckbox = document.querySelector('input[name="checkbox10"]:checked'); // Fix checkbox name
                    const VrunableCoastlineCheckbox = document.querySelector('input[name="checkbox11"]:checked');
                    const HighTideLineCheckbox = document.querySelector('input[name="checkbox12"]:checked');
                    const LowTideLineCheckbox = document.querySelector('input[name="checkbox13"]:checked');
                    const BundCheckbox = document.querySelector('input[name="checkbox14"]:checked');
                    const SeawallCheckbox = document.querySelector('input[name="checkbox15"]:checked');
                    const HarbourCheckbox = document.querySelector('input[name="checkbox16"]:checked');
                    const HazardLineCheckbox = document.querySelector('input[name="checkbox17"]:checked');
                    const SanddaneCheckbox = document.querySelector('input[name="checkbox18"]:checked');
                    const EcosensativeZoneCheckbox = document.querySelector('input[name="checkbox19"]:checked');
                    const MangroveBufferZoneCheckbox = document.querySelector('input[name="checkbox20"]:checked');
                    const DGPSPointCheckbox = document.querySelector('input[name="checkbox21"]:checked');
                    const PillerLocationCheckbox = document.querySelector('input[name="checkbox22"]:checked');
                    const YearWizeCoastlineCheckbox = document.querySelector('input[name="checkbox23"]:checked');
    
                    // Check each checkbox and add corresponding KML layers
                    if (chainageCheckbox && villageData['chainageURL']) {
                        const chainageURL = villageData['chainageURL'];
                        addKMLLayer(chainageURL);
                    } else if (ecwCheckbox && villageData['ecwURL']) {
                        const ecwURL = villageData['ecwURL'];
                        addKMLLayer(ecwURL);
                    } else if (dtmCheckbox && villageData['dtmURL']) {
                        const dtmURL = villageData['dtmURL'];
                        addKMLLayer(dtmURL);
                    } else if (dsmCheckbox && villageData['dsmURL']) {
                        const dsmURL = villageData['dsmURL'];
                        addKMLLayer(dsmURL);
                    } else if (contourCheckbox && villageData['contourURL']) {
                        const contourURL = villageData['contourURL'];
                        addKMLLayer(contourURL);
                    } else if (topoplanCheckbox && villageData['topoplanURL']) {
                        const topoplanURL = villageData['topoplanURL'];
                        addKMLLayer(topoplanURL);
                    } else if (VillageMapCheckbox && villageData['VillageMapURL']) {
                        const VillageMapURL = villageData['VillageMapURL'];
                        addKMLLayer(VillageMapURL);
                    } else if (APCCheckbox && villageData['APCURL']) {
                        const APCURL = villageData['APCURL'];
                        addKMLLayer(APCURL);
                    } else if (NPCCheckbox && villageData['NPCURL']) {
                        const NPCURL = villageData['NPCURL'];
                        addKMLLayer(NPCURL);
                    } else if (UPCCheckbox && villageData['UPCURL']) {
                        const UPCURL = villageData['UPCURL'];
                        addKMLLayer(UPCURL);
                    } else if (VrunableCoastlineCheckbox && villageData['VrunableCoastlineURL']) {
                        const VrunableCoastlineURL = villageData['VrunableCoastlineURL'];
                        addKMLLayer(VrunableCoastlineURL);
                    } else if (HighTideLineCheckbox && villageData['HighTideLineURL']) {
                        const HighTideLineURL = villageData['HighTideLineURL'];
                        addKMLLayer(HighTideLineURL);
                    } else if (LowTideLineCheckbox && villageData['LowTideLineURL']) {
                        const LowTideLineURL = villageData['LowTideLineURL'];
                        addKMLLayer(LowTideLineURL);
                    } else if (BundCheckbox && villageData['BundURL']) {
                        const BundURL = villageData['BundURL'];
                        addKMLLayer(BundURL);
                    } else if (SeawallCheckbox && villageData['SeawallURL']) {
                        const SeawallURL = villageData['SeawallURL'];
                        addKMLLayer(SeawallURL);
                    } else if (HarbourCheckbox && villageData['HarbourURL']) {
                        const HarbourURL = villageData['HarbourURL'];
                        addKMLLayer(HarbourURL);
                    } else if (HazardLineCheckbox && villageData['HazardLineURL']) {
                        const HazardLineURL = villageData['HazardLineURL'];
                        addKMLLayer(HazardLineURL);
                    } else if (SanddaneCheckbox && villageData['SanddaneMapURL']) {
                        const SanddaneURL = villageData['SanddaneURL'];
                        addKMLLayer(SanddaneURL);
                    } else if (EcosensativeZoneCheckbox && villageData['EcosensativeZoneURL']) {
                        const EcosensativeZoneURL = villageData['EcosensativeZoneURL'];
                        addKMLLayer(EcosensativeZoneURL);
                    } else if (MangroveBufferZoneCheckbox && villageData['MangroveBufferZoneURL']) {
                        const MangroveBufferZoneURL = villageData['MangroveBufferZoneURL'];
                        addKMLLayer(MangroveBufferZoneURL);
                    } else if (DGPSPointCheckbox && villageData['DGPSPointCoastlineURL']) {
                        const DGPSPointCoastlineURL = villageData['DGPSPointCoastlineURL'];
                        addKMLLayer(DGPSPointCoastlineURL);
                    } else if (PillerLocationCheckbox && villageData['PillerLocationURL']) {
                        const PillerLocationURL = villageData['PillerLocationURL'];
                        addKMLLayer(PillerLocationURL);
                    } else if (YearWizeCoastlineCheckbox && villageData['YearWizeCoastlineURL']) {
                        const YearWizeCoastlineURL = villageData['YearWizeCoastlineURL'];
                        addKMLLayer(YearWizeCoastlineURL);
                    } else {
                        alert("Please select the checkbox.");
                    }
                } else {
                    alert("Please select a district, taluka, and village.");
                }
            });
    
            // Function to remove the current KML layer
            function removeCurrentKMLLayer() {
                if (currentKMLLayer) {
                    map.removeLayer(currentKMLLayer);
                    currentKMLLayer = null;
                }
            }
    
    
              // Event listener for download button
    document.getElementById('downloadButton').addEventListener('click', function (event) {
        event.preventDefault();
    
        const selectedDistrict = districtSelect.value;
        const selectedTaluka = talukaSelect.value;
        const selectedVillage = villageSelect.value;
        const villageData = data[selectedDistrict]?.[selectedTaluka]?.[selectedVillage];
    
        if (selectedDistrict && selectedTaluka && selectedVillage && villageData) {
        const chainageCheckbox = document.querySelector('input[name="checkbox1"]:checked');
        const ecwCheckbox = document.querySelector('input[name="checkbox2"]:checked');
        const dtmCheckbox = document.querySelector('input[name="checkbox3"]:checked');
        const dsmCheckbox = document.querySelector('input[name="checkbox4"]:checked');
        const contourCheckbox = document.querySelector('input[name="checkbox5"]:checked'); // Fix variable name
        const topoplanCheckbox = document.querySelector('input[name="checkbox6"]:checked');
        const VillageMapCheckbox = document.querySelector('input[name="checkbox7"]:checked');
        const APCCheckbox = document.querySelector('input[name="checkbox8"]:checked');
        const NPCCheckbox = document.querySelector('input[name="checkbox9"]:checked'); // Fix checkbox name
        const UPCCheckbox = document.querySelector('input[name="checkbox10"]:checked'); // Fix checkbox name
        const VrunableCoastlineCheckbox = document.querySelector('input[name="checkbox11"]:checked');
        const HighTideLineCheckbox = document.querySelector('input[name="checkbox12"]:checked');
        const LowTideLineCheckbox = document.querySelector('input[name="checkbox13"]:checked');
        const BundCheckbox = document.querySelector('input[name="checkbox14"]:checked');
        const SeawallCheckbox = document.querySelector('input[name="checkbox15"]:checked');
        const HarbourCheckbox = document.querySelector('input[name="checkbox16"]:checked');
        const HazardLineCheckbox = document.querySelector('input[name="checkbox17"]:checked');
        const SanddaneCheckbox = document.querySelector('input[name="checkbox18"]:checked');
        const EcosensativeZoneCheckbox = document.querySelector('input[name="checkbox19"]:checked');
        const MangroveBufferZoneCheckbox = document.querySelector('input[name="checkbox20"]:checked');
        const DGPSPointCheckbox = document.querySelector('input[name="checkbox21"]:checked');
        const PillerLocationCheckbox = document.querySelector('input[name="checkbox22"]:checked');
        const YearWizeCoastlineCheckbox = document.querySelector('input[name="checkbox23"]:checked');
        
    
    
        if (chainageCheckbox && villageData['chainageURL']) {
            const chainageURL = villageData['chainageURL'];
    
            const chainageLink = document.createElement('a');
            chainageLink.href = chainageURL;
            chainageLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(chainageLink);
            chainageLink.click();
            document.body.removeChild(chainageLink);
        } else if (ecwCheckbox && villageData['ECWURL']) {
            const ecwURL = villageData['ECWURL'];
    
            const ecwLink = document.createElement('a');
            ecwLink.href = ecwURL;
            ecwLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(ecwLink);
            ecwLink.click();
            document.body.removeChild(ecwLink);
        } else if (dsmCheckbox && villageData['dsmURL']) {
            const dsmURL = villageData['dsmURL'];
    
            const dsmLink = document.createElement('a');
            dsmLink.href = dsmURL;
            dsmLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(dsmLink);
            dsmLink.click();
            document.body.removeChild(dsmLink);
        }
        else if (dtmCheckbox && villageData['dtmURL']) {
            const dtmURL = villageData['dtmURL'];
    
            const dtmLink = document.createElement('a');
            dtmLink.href = dtmURL;
            dtmLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(dtmLink);
            dtmLink.click();
            document.body.removeChild(dtmLink);
        }
        else if (contourCheckbox && villageData['contourURL']) {
            const contourURL = villageData['contourURL'];
    
            const contourLink = document.createElement('a');
            contourLink.href = contourURL;
            contourLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(contourLink);
            contourLink.click();
            document.body.removeChild(contourLink);
        }
        else if (topoplanCheckbox && villageData['topoplanURL']) {
            const topoplanURL = villageData['topoplanURL'];
    
            const topoplanLink = document.createElement('a');
            topoplanLink.href = topoplanURL;
            topoplanLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(topoplanLink);
            topoplanLink.click();
            document.body.removeChild(topoplanLink);
        }
        else if (VillageMapCheckbox && villageData['VillageMapURL']) {
            const VillageMapURL = villageData['VillageMapURL'];
    
            const VillageMapLink = document.createElement('a');
            VillageMapLink.href = VillageMapURL;
            VillageMapLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(VillageMapLink);
            VillageMapLink.click();
            document.body.removeChild(VillageMapLink);
        }
        else if (APCCheckbox && villageData['APCURL']) {
            const APCURL = villageData['APCURL'];
    
            const APCLink = document.createElement('a');
            APCLink.href = APCURL;
            APCLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(APCLink);
            APCLink.click();
            document.body.removeChild(APCLink);
        }
        else if (NPCCheckbox && villageData['NPCURL']) {
            const NPCURL = villageData['NPCURL'];
    
            const NPCLink = document.createElement('a');
            NPCLink.href = NPCURL;
            NPCLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(NPCLink);
            NPCLink.click();
            document.body.removeChild(NPCLink);
        }
        else if (UPCCheckbox && villageData['UPCURL']) {
            const UPCURL = villageData['UPCURL'];
    
            const UPCLink = document.createElement('a');
            UPCLink.href = UPCURL;
            UPCLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(UPCLink);
            UPCLink.click();
            document.body.removeChild(UPCLink);
        }
        else if (VrunableCoastlineCheckbox && villageData['VrunableCoastlineURL']) {
            const VrunableCoastlineURL = villageData['VrunableCoastlineURL'];
    
            const VrunableCoastlineLink = document.createElement('a');
            VrunableCoastlineLink.href = VrunableCoastlineURL;
            VrunableCoastlineLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(VrunableCoastlineLink);
            VrunableCoastlineLink.click();
            document.body.removeChild(VrunableCoastlineLink);
        }
        else if (HighTideLineCheckbox && villageData['HighTideLineURL']) {
            const HighTideLineURL = villageData['HighTideLineURL'];
    
            const HighTideLineLink = document.createElement('a');
            HighTideLineLink.href = HighTideLineURL;
            HighTideLineLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(HighTideLineLink);
            HighTideLineLink.click();
            document.body.removeChild(HighTideLineLink);
        }
        else if (LowTideLineCheckbox && villageData['LowTideLineURL']) {
            const LowTideLineURL = villageData['LowTideLineURL'];
    
            const LowTideLineLink = document.createElement('a');
            LowTideLineLink.href = LowTideLineURL;
            LowTideLineLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(LowTideLineLink);
            LowTideLineLink.click();
            document.body.removeChild(LowTideLineLink);
        }
        else if (BundCheckbox && villageData['BundURL']) {
            const BundURL = villageData['BundURL'];
    
            const BundLink = document.createElement('a');
            BundLink.href = BundURL;
            BundLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(BundLink);
            BundLink.click();
            document.body.removeChild(BundLink);
        }
        else if (SeawallCheckbox && villageData['SeawallURL']) {
            const SeawallURL = villageData['SeawallURL'];
    
            const SeawallLink = document.createElement('a');
            SeawallLink.href = SeawallURL;
            SeawallLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(SeawallLink);
            SeawallLink.click();
            document.body.removeChild(SeawallLink);
        }
        else if (HarbourCheckbox && villageData['HarbourURL']) {
            const HarbourURL = villageData['HarbourURL'];
    
            const HarbourLink = document.createElement('a');
            HarbourLink.href = HarbourURL;
            HarbourLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(HarbourLink);
            HarbourLink.click();
            document.body.removeChild(HarbourLink);
        }
        else if (HazardLineCheckbox && villageData['HazardLineURL']) {
            const HazardLineURL = villageData['HazardLineURL'];
    
            const HazardLineLink = document.createElement('a');
            HazardLineLink.href = HazardLineURL;
            HazardLineLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(HazardLineLink);
            HazardLineLink.click();
            document.body.removeChild(HazardLineLink);
        }
        else if (SanddaneCheckbox && villageData['SanddaneURL']) {
            const SanddaneURL = villageData['SanddaneURL'];
    
            const SanddaneLink = document.createElement('a');
            SanddaneLink.href = SanddaneURL;
            SanddaneLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(SanddaneLink);
            SanddaneLink.click();
            document.body.removeChild(SanddaneLink);
        }
        else if (EcosensativeZoneCheckbox && villageData['EcosensativeZoneURL']) {
            const EcosensativeZoneURL = villageData['EcosensativeZoneURL'];
    
            const EcosensativeZoneLink = document.createElement('a');
            EcosensativeZoneLink.href = EcosensativeZoneURL;
            EcosensativeZoneLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(EcosensativeZoneLink);
            EcosensativeZoneLink.click();
            document.body.removeChild(EcosensativeZoneLink);
        }
        else if (MangroveBufferZoneCheckbox && villageData['MangroveBufferZoneURL']) {
            const MangroveBufferZoneURL = villageData['MangroveBufferZoneURL'];
    
            const MangroveBufferZoneLink = document.createElement('a');
            MangroveBufferZoneLink.href = MangroveBufferZoneURL;
            MangroveBufferZoneLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(MangroveBufferZoneLink);
            MangroveBufferZoneLink.click();
            document.body.removeChild(MangroveBufferZoneLink);
        }
        else if (DGPSPointCheckbox && villageData['DGPSPointURL']) {
            const DGPSPointURL = villageData['DGPSPointURL'];
    
            const DGPSPointLink = document.createElement('a');
            DGPSPointLink.href = DGPSPointURL;
            DGPSPointLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(DGPSPointLink);
            DGPSPointLink.click();
            document.body.removeChild(DGPSPointLink);
        }
        else if (PillerLocationCheckbox && villageData['PillerLocationURL']) {
            const PillerLocationURL = villageData['PillerLocationURL'];
    
            const PillerLocationLink = document.createElement('a');
            PillerLocationLink.href = PillerLocationURL;
            PillerLocationLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(PillerLocationLink);
            PillerLocationLink.click();
            document.body.removeChild(PillerLocationLink);
        }
        else if (YearWizeCoastlineCheckbox && villageData['YearWizeCoastlineURL']) {
            const YearWizeCoastlineURL = villageData['YearWizeCoastlineURL'];
    
            const YearWizeCoastlineLink = document.createElement('a');
            YearWizeCoastlineLink.href = YearWizeCoastlineURL;
            YearWizeCoastlineLink.download = ''; // You can specify a custom filename here if needed
            document.body.appendChild(YearWizeCoastlineLink);
            YearWizeCoastlineLink.click();
            document.body.removeChild(YearWizeCoastlineLink);
        }
        else {
            alert("Please select the checkbox.");
        }
    } else {
        alert("Please select a district, taluka, and village.");
    }
    });
    
    // Function to handle file downloads
    function downloadFile(url) {
        const link = document.createElement('a');
        link.href = url;
        link.download = ''; // You can specify a custom filename here if needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    });
    
            }, 1000); // 10-second delay
        });
// });
