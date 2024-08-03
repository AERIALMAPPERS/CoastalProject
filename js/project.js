document.addEventListener("DOMContentLoaded", function () {
    const data = {
        // Your data here...
        //District 1        
        "Palghar": {
            //Taluka1            
            "Talasari": {

                "Zai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14984.99849851903!2d72.73184137576085!3d20.12363087791252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72a272b437cdb%3A0x83e815b1cb006dbc!2sZai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699292225138!5m2!1sen!2sin",
                    "dwgURL": " ./dwg/Palghar/TALSARI/ZAI/ZAI.dwg",
                },

            },
            //Taluka 2            
            "Dahanu": {

                "Bordi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59946.20704722409!2d72.71086577883432!3d20.1074163393148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72991f51b5633%3A0x76c6e1de285b528f!2sBordi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699035518751!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/BORDI/BORDI.dwg"
                },
                "Vikasnager": {
                    "mapURL": "https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14990.171619550529!2d72.70183660818918!3d20.069579857666742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72827d727659d%3A0x855f7d5ff6fa4a3!2sVikasnagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699036218764!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/VIKASNAGAR/VIKASNAGAR.dwg"
                },
                "Chikhale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14991.259527708606!2d72.71414999999998!3d20.05819515000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7281f5e001dbd%3A0x65a3c9f7f9be4f15!2sChikhale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699036282901!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/CHIKHALI/CHIKHALI.dwg"
                },
                "Ambewadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50425.09760770634!2d72.72300848242867!3d20.055979197965346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be727e2e4c77b6b%3A0x674dec18d0b31795!2sAmbewadi%2C%20Maharashtra%20401602!5e0!3m2!1sen!2sin!4v1699049418909!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/AAMBEWADI/AAMBEWADI.dwg "
                },
                "Narpad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7497.696304547533!2d72.71581279522985!3d20.014886806451404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7278d4c59f787%3A0xcdd16e34dec9975a!2sNarpad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699049521904!5m2!1sen!2sin",
                    "dwgURL": " ./dwg/Palghar/DAHANU/NARPAD/NARPAD.dwg"
                },
                "Thakurwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7497.5877451236265!2d72.71900752734382!3d20.017164114434497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be727ecc2cbfee7%3A0x3b10519090be970!2sThakurwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699049582903!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/THAKURWADI/THAKURWADI.dwg "
                },
                "Dahanu": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29998.250166107166!2d72.72504586911606!3d19.97569884493148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be727139097994d%3A0x4cdfb0c335cb4ecd!2sDahanu%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699049655431!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/DAHANU/DAHANU.dwg "
                },
                "Dhakti Dahanu": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9855490932073!2d72.7114355259801!3d19.967109973392716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72760a2d987fb%3A0xd9c33902c0678a22!2sDhakati%20Dahanu%2C%20Dahanu%2C%20Maharashtra%20401601!5e0!3m2!1sen!2sin!4v1699049729567!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/DHAKTI DAHANU/DHAKTI DAHANU.dwg"
                },
                "Bade Pokhran": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7500.823687615547!2d72.69758019522514!3d19.949175010859825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6d8aeb951ad89%3A0xf1611650ca64116f!2sPokharan%2C%20Maharashtra%20401601!5e0!3m2!1sen!2sin!4v1699049788047!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/BADE POKHARAN/BADEPOKHRAN.dwg "
                },
                "Dhumket": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.3548954195003!2d72.71640312597974!3d19.951571823901467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72751abd501f9%3A0x146984f196f60e3b!2sDhumkhet%2C%20Maharashtra%20401601!5e0!3m2!1sen!2sin!4v1699049826639!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/DHUMKET/DHUMKET.dwg"
                },
                "Chandigaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15003.607479993909!2d72.70982266349425!3d19.92853962621055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be720a4c1f1db15%3A0xe240a96916d64a8!2sChandigaon%2C%20Maharashtra%20401103!5e0!3m2!1sen!2sin!4v1699049865711!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/CHANDIGAON/CHANDIGAON.dwg "
                },
                "Gungawada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7500.529644529355!2d72.68772519522557!3d19.955362210445188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6d8ba31e33293%3A0x92380093df2f39ed!2sGungwada%2C%20Maharashtra%20401601!5e0!3m2!1sen!2sin!4v1699292103337!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/GUNGAWADA/GUNGAWADA.dwg"
                },
                "Pokhran": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28459.27844769957!2d71.88422802829675!3d26.922219869680557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39472d7ef9715b3d%3A0x70bc23d036e19b80!2sPokhran%2C%20Rajasthan%20345021!5e0!3m2!1sen!2sin!4v1699049955448!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/POKHRAN/POKHRAN.dwg"
                },
                "vandhavan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7501.779440366197!2d72.6661143952238!3d19.92905151220713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6df2f755bed9b%3A0x12b02fa62698764c!2sVandhavan%2C%20Maharashtra%20401503!5e0!3m2!1sen!2sin!4v1699049992254!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/VANDHAVAN/VANDHAVAN.dwg"
                },
                "Vasgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7502.175151097303!2d72.69891494522338!3d19.92071406276492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6df5dfdcb89a5%3A0xc02cfa273158002b!2sVasgaon%2C%20Maharashtra%20401503!5e0!3m2!1sen!2sin!4v1699050036390!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/VASGAON/VASGAON.dwg "
                },
                "Ambistewadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15003.436086155873!2d72.67703021349467!3d19.930344825957704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6df4813877c47%3A0x9c2323e73c065b5a!2sAmbistewadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699050105497!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/AMBISTHEWADI/AMBITHEWVADI.dwg "
                },
                "Varor": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7502.870115459918!2d72.67438569522241!3d19.906063363744952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6df11fa583efd%3A0x832e0c2b362876f1!2sVaror%2C%20Maharashtra%20401503!5e0!3m2!1sen!2sin!4v1699050142246!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/VAROR/VAROR.dwg "
                },
                "Chinchani": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30015.574841075908!2d72.66608456901645!3d19.88446587275159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6dfa2ef9c72ad%3A0xc54e68fb032645f0!2sChinchani%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699050182126!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/DAHANU/CHINCHANI/CHINCHAIN.dwg",
                },
            },
            //Taluka 3
            "Vasai": {
                "Chikhaldongre": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15045.579080488287!2d72.77860176337475!3d19.48164438822187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aa0dcf981f7b%3A0xf80846b9391232fe!2sChikhal%20Dongari%2C%20Virar%20West%2C%20Virar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699050842117!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/CHIKHALDONGRE/CHIKHALDONGRE.dwg",
                },
                "Kolhapur": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61141.86674973!2d74.19766829269504!3d16.708546679754456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699050876690!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/KOLHAPUR/KOLHAPUR.dwg ",
                },
                "Mukkam": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7824.352763733649!2d75.98956739479686!3d11.321815225529214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba641801beef9e9%3A0xb2830e78854a4e17!2sMukkam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699050909122!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/MUKKAM/MUKKAM.dwg",
                },
                "Patilgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7524.080329501536!2d72.75486509519241!3d19.453835043674985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aa59d2c79e3b%3A0x5373e4afd8cc3cd4!2sPatilgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699050940253!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/PATILGAON/PATILGAON.dwg",
                },
                "Arnala": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7524.080329501536!2d72.75486509519241!3d19.453835043674985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aaf16e60af7d%3A0x549baf41a5fb8bd6!2sArnala%2C%20Virar%20West%2C%20Virar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699050971621!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/ARNALA/ARNALA.dwg ",
                },
                "Vatar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15049.28471650081!2d72.74722892431014!3d19.441714494744577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abad3d5aa4eb%3A0xcdee971dc9858e35!2sVatar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051026989!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/VATHAR/VATHAR.dwg ",
                },
                "Satpale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.231100956237!2d72.75617014519077!3d19.429010045300238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aba63fbeaa3f%3A0x5407c614261b8141!2sSatpale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051058724!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/VATHAR/VATHAR.dwg ",
                },
                "Rajodi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.729915122989!2d72.75131046336014!3d19.426120445845502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ab98af125a43%3A0xcfd3c08f31b24bb5!2sRajodi%2C%20Nalasopara%20West%2C%20Nala%20Sopara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051093412!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/RAJODI/RAJODI COMPLETED.dwg",
                },
                "Kalamb": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15052.920229220903!2d72.75697981335392!3d19.402463449088224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ab9b7025a549%3A0x93a21f5d0ef33473!2sKalamb%2C%20Nalasopara%20West%2C%20Nala%20Sopara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699299400167!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/KALAMB/KALAMB.12.dwg ",
                },
                "Wagholi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15051.58813473763!2d72.76797476335773!3d19.416854347116004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abec98386deb%3A0x22163644911e3592!2sWagholi%2C%20Nalasopara%20West%2C%20Nala%20Sopara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699299520363!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/WAGHOLI/WAGHOLI.dwg",
                },
                "Nirmal": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7526.621330977723!2d72.77131954518875!3d19.398978597264307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ab8ada4eb14f%3A0x9f2bb65fb85f93d!2sNirmal%2C%20Nalasopara%20West%2C%20Nala%20Sopara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051207708!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/NIRMAL/NIRMAL.dwg",
                },
                "Bhuigaon KH": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7526.973223579324!2d72.76289009518817!3d19.391369997761274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ac79f00d5185%3A0x85eacb23f7d075a6!2sBhuigaon%20Kh.%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051295108!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/BHUIGAON KH/BHUIGAON KHURD .16.dwg",
                },
                "Bhuigaon BK": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15054.887210291467!2d72.76019026334839!3d19.381194952000797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ac6f14600a91%3A0x4d873ec54900cee6!2sBhuigaon%20Bk.%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051346916!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/BHUGAON BK/BHUGAON BK.dwg ",
                },
                "Rangaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7527.897872653571!2d72.77011814518683!3d19.371363599067383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ac4f21cbb39b%3A0x3cabb73c62a0dd7a!2sRangaon%2C%20Vasai%20West%2C%20Vasai-Virar%2C%20Maharashtra%20401201!5e0!3m2!1sen!2sin!4v1699051378596!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/RANGAON/RANGAON.dwg",
                },
                "Kaular BK": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15056.06637518017!2d72.75678602415726!3d19.36843415716465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ac46ca912e45%3A0x935d2f429ae733c8!2sKaular%20Bk.%2C%20Maharashtra%20401201!5e0!3m2!1sen!2sin!4v1699051423380!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/KAULAR BK/KAULAR BK.dwg ",
                },
                "Kaular KH": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7528.671707262832!2d72.77726514518596!3d19.35460505016098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ac350a36a3db%3A0xe7ef7bcf2416adfc!2sKaular%20Kh.%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051553052!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/KAULAR KHURD/KAULAR KHURD.dwg ",
                },
                "Sandor(CT)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15056.4940707639!2d72.76956173282473!3d19.36380368340565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ac2bc99f8403%3A0x864a9406725e5744!2sSandor%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699299719179!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/SANDOOR/SANDOOR.dwg",
                },
                "Vasai(MCI)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240791.37423355482!2d72.7169596548112!3d19.439814187292054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a94ef1bdc0af%3A0x8540289257e6802b!2sVasai!5e0!3m2!1sen!2sin!4v1699051643460!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/VASAI(MCI)/VASAI (MCI).dwg",
                },
                "Kochiwade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.3446805124731!2d72.82272573882892!3d19.339281376344754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae6965fb07af%3A0x28a04786a5c0515f!2sKhochiwade%2C%20Maharashtra%20401207!5e0!3m2!1sen!2sin!4v1699051680547!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/KHOCHIWADA/KHOCHIWADA.dwg",
                },
                "Vadiwali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7529.246875906515!2d72.82443812698799!3d19.342139864545693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae44795435eb%3A0xc98dc5f3c03f477e!2sVadavali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051709083!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/WADIWALI/WADIWALI GEOREFERENCED FINAL.dwg ",
                },
                "Panju": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15059.477566092584!2d72.84396876333543!3d19.33147300879958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7afca4b52a1e9%3A0xf198fe03e48c5139!2sPanju%20Island%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051756252!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/VASAI/PANJU/PANJU.dwg",
                }
            },
            //Taluka 4
            "Palghar": {
                "Tarapur(CT)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7505.0636987393555!2d72.6727365772598!3d19.859751926232487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6dfc32d36601b%3A0x42260a4d7dc160ae!2sTarapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051828427!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/TARAPUR.dwg",
                },
                "Kambode": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15010.371710228563!2d72.66963021347489!3d19.857169886191475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6dfdb7cfa123f%3A0x5511f47bcbd9f138!2sKambode%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051860694!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/KAMBODE.dwgs ",
                },
                "Sawarai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15011.256152480177!2d72.6667102634724!3d19.847819887496865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6dfd87f07dcc7%3A0x33111ea258522887!2sSawarai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051887329!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/SAVRAI.dwg ",
                },
                "Ghivali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.857702385524!2d72.66189247597801!3d19.845972977348335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e07f8f21c895%3A0xa92b171d9901f348!2sGhivali%2C%20Maharashtra%20401502!5e0!3m2!1sen!2sin!4v1699051918070!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/GHIVALI.dwg",
                },
                "Akkarptti": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15013.08761460801!2d72.66197026346718!3d19.828444890200288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e0664268d4cf%3A0x35b0a9bf8537c823!2sAkkarpatti%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699051949099!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/AKARAPATTI.dwg",
                },
                "Popharan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.617563494477!2d72.71470237597823!3d19.856128327017526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72003e6d2b6b9%3A0x6c43de481c92bfa!2sPopharan%2C%20Maharashtra%20401501!5e0!3m2!1sen!2sin!4v1699051977523!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/POPHARAN.dwg",
                },
                "Unbhat": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15013.679931718838!2d72.67154526346553!3d19.82217489107468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e0410a5dd12b%3A0x490c72c30c1dc924!2sUnbhat%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699052019219!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/UNBHAT.dwg ",
                },
                "Uchheli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7507.409356498888!2d72.67783964521576!3d19.81011492014613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e0492eff1fbf%3A0xc20e0b77d13879a4!2sUchheli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699052047274!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/UCCCHHELI.dwg ",
                },
                "Dandi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7507.944965228734!2d72.67622057722734!3d19.798764030785176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e1ca9dbb6ca7%3A0xd482e4e3e2f4ee38!2sDandi%2C%20Maharashtra%20401501!5e0!3m2!1sen!2sin!4v1699052111203!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/DANDI.dwg",
                },
                "Nawapur": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15049.489923430898!2d72.74885521336367!3d19.439500994009936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abaaefe3f4bb%3A0x11c8e12cda98deb1!2sNavapur%2C%20Virar%20West%2C%20Virar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699300050530!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/NAVAPUR.dwg ",
                },
                "Alewadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.5144152934763!2d72.68842222597677!3d19.775775079630534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e1ebc2692e27%3A0xb41e200672c31dcb!2sAlewadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699052178579!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/ALEWADI.dwg ",
                },
                "Gundavali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12628.997568310793!2d72.70097788225476!3d19.77114707965157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e1e2966b344f%3A0xe18c05380d05f5c2!2sGundavali%20-%20Kumbhavali%20Rd%2C%20Maharashtra%20401501!5e0!3m2!1sen!2sin!4v1699300157037!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/GUNDAVALI.dwg",
                },
                "Murabe": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15018.716185301839!2d72.68066416345115!3d19.76878629851088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e1edf0c405cb%3A0x5ab0b32b082678d1!2sMurabe%2C%20Nandgaon%2C%20Gundali%2C%20Maharashtra%20401501!5e0!3m2!1sen!2sin!4v1699052242315!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/MURAMBE.dwg ",
                },
                "Satpati": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15023.13705566331!2d72.69372216343855!3d19.721806955040712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e270664ce65d%3A0x8e61fd10db4a0300!2sSatpati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699052279002!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/SATPATI.dwg",
                },
                "Shirgaon(CT)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.0101848090285!2d72.70701577597579!3d19.712190531691157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e2800245df57%3A0x443451c44a35c64!2sShirgaon%20-%20Satpati%20Rd%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699052311298!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/SHIRGOAN- SATPATI.dwg ",
                },
                "Wadrai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.1648802072505!2d72.7094174759748!3d19.662969883282226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be702a974b7b8c9%3A0x76b4fc2809d1c97e!2sWadrai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699052341170!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/WADARAI.dwg",
                },
                "Haranawadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60117.01221429165!2d72.68782967905764!3d19.65663624201859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be703245fe48753%3A0xd16a0be12e68b2ad!2sHaranwali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699300298885!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/HARANWADI.dwg",
                },
                "Nandgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15019.25038073843!2d72.67837181344966!3d19.763115249299794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e1f255c6f9d3%3A0x46736440d20123a6!2sNandgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699300385333!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/nandgoan.dwg ",
                },
                "Mahim": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.145885769076!2d72.83169526325996!3d19.04013649834669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92e5ad82b5d%3A0xa5d4096e2b84be0d!2sMahim%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699053938353!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/MAHIM.dwg ",
                },
                "Kelwe": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15033.517912644667!2d72.718419963409!3d19.61106777038215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be70268e8c9d1a5%3A0x469666460183e2ce!2sKelwa%20Beach!5e0!3m2!1sen!2sin!4v1699053980847!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/KELVE.dwg ",
                },
                "Mangelwada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7516.307194350287!2d72.72473519520334!3d19.620730082700568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be70261b1c9d49b%3A0x504ed3234b6aaebd!2sMangelwada%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699054008389!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/MAGALWEDA.dwg",
                },
                "Usarni": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7518.331891971723!2d72.71466489520044!3d19.577389985558312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be70202932d0907%3A0xa2e127bc0dc0f8ee!2sUsarni%2C%20Maharashtra%20401102!5e0!3m2!1sen!2sin!4v1699054037193!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/USARNI.dwg",
                },
                "Dande": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15036.238606906261!2d72.71989531340125!3d19.58194492440494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7021ed773507f%3A0x2c7238e8cf246c03!2sDande%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699054070601!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/DHANDE.dwg",
                },
                "Khatali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7517.8851874715865!2d72.73528514520093!3d19.586959934927815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be702248c319973%3A0xd13d51549c73f5c6!2sKhatali%2C%20Maharashtra%20401102!5e0!3m2!1sen!2sin!4v1699054106375!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/KHATALI.dwg ",
                },
                "Mathane": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7519.602949216284!2d72.7194713951985!3d19.550134937352855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be701c3aa444efd%3A0xe17770dc716b3bd4!2sMathane%2C%20Maharashtra%20401102!5e0!3m2!1sen!2sin!4v1699054137007!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/MATHANE.dwg",
                },
                "Edwan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7519.602949216284!2d72.7194713951985!3d19.550134937352855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be701c5f4b0dfab%3A0xbdbfa9942d328f3e!2sEdvan%2C%20Maharashtra%20401102!5e0!3m2!1sen!2sin!4v1699054171593!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/EDHWAN.dwg",
                },
                "Kore": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7520.492196175044!2d72.72558682708605!3d19.531045250649022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7004acc473fff%3A0x1515c729925eb561!2sKore%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699054211945!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/KORE.dwg",
                },
                "Datiware": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7520.492196175044!2d72.72558682708605!3d19.531045250649022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be700f86c277795%3A0xf0e382bad2894ef5!2sDativare%2C%20Maharashtra%20401102!5e0!3m2!1sen!2sin!4v1699054252048!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/DATIVARE.dwg",
                },
                "Bandar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30082.942210527104!2d72.74179486863027!3d19.525817931239548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be70054496aa351%3A0x6d9bf7d5ccd74d0!2sBandar%2C%20Maharashtra%20401102!5e0!3m2!1sen!2sin!4v1699054276920!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/BANDAR.dwg",
                },
                "Tembi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7524.156583683984!2d72.74740514519223!3d19.452190993782867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aaf9e0a62637%3A0x7e2508e9e1d2fab7!2sTembhi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699134914622!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Palghar/PALGHAR/TEMBI.dwg",
                },
            },
        },
        //Disreict 2
        "Thane": {
            //Taluka 1    
            "Thane": {
                "Bhayandar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30124.49851215127!2d72.81926291839298!3d19.30139089841409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02afa358a35%3A0x2356aebf3c63cb2a!2sBhayandar%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699300591499!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Thane/THANE/BHAINDAR.dwg ",
                },
                "Chouk": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7549.3897659961785!2d73.2368374951566!3d18.900612429456775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e49aa7c1b767%3A0x3f4450eebac797bd!2sChouk%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1699300787684!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Thane/THANE/CHOUK.dwg ",
                },
                "Dongari": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14980.205641077344!2d72.84803531356114!3d20.17358484171738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72db17707d079%3A0x36b96bd5f7175b95!2sDongari%2C%20Maharashtra%20401606!5e0!3m2!1sen!2sin!4v1699054406256!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Thane/THANE/DONGARI.dwg ",
                },
                "Pali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d816406.9575868599!2d72.94169268165308!3d18.095235815499418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be81123b52bc5d9%3A0xd60945cf4eff958e!2sPali%2C%20Maharashtra%20410205!5e0!3m2!1sen!2sin!4v1699054480736!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Thane/THANE/PALI.dwg",
                },
                "Morva": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341213.8861718208!2d72.88962478836083!3d19.11132094600828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1f209399baf%3A0xa76d92f823bced25!2sAagri%2C%20Morva%2C%20Maharashtra%20401101!5e0!3m2!1sen!2sin!4v1699054526040!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Thane/THANE/MORVA.dwg ",
                },
                "Rai Murdha": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.6355222192888!2d72.82493508595985!3d19.298210048440488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1dd39b71461%3A0xb0bbb06f68f004bc!2sBhayandar%2C%20Murdha%20Gaon%2C%20Bhayandar%20West%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401101!5e0!3m2!1sen!2sin!4v1699054746303!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Thane/THANE/RAIMURDHE.dwg",
                },
                "Tara and i": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.155364108418!2d72.818125675963!3d18.924516056709066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1ec1fd00001%3A0x757a739ccc26528c!2stara%20and%20i!5e0!3m2!1sen!2sin!4v1699054800151!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Thane/THANE/TARANDI.dwg ",
                },
                "Uttan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60259.3454247235!2d72.76911185270968!3d19.27327145676745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1f3d811e105%3A0x7310535d2fc043c7!2sUttan%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699054846068!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Thane/THANE/UTTAN.dwg ",
                }
            },
        },

        //District 3
        "Mumbai Suburban": {
            //taluka1
            "Mumbai Suburban": {

            },

            //taluka2
            "Andheri": {
                "Bandra": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15084.840303849429!2d72.81935456326366!3d19.054499046408658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d27b%3A0x437996b49a236a78!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699005410407!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Danda": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.38779305279!2d72.82339154859056!3d19.07360196897438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9736dac7d29%3A0xe7bd127eb2aee42d!2sDanda%2C%20Pali%20Hill%2C%20Mumbai%2C%20Maharashtra%20400052!5e0!3m2!1sen!2sin!4v1699005609882!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Juhu": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.580857967743!2d72.81924416327564!3d19.101284390087244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf95d4ba07%3A0x35047c9c36b6cea1!2sJuhu%2C%20Mumbai%2C%20Maharashtra%20400049!5e0!3m2!1sen!2sin!4v1699005694941!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
            },
            //taluka3
            "Kurla": {
                "Anik": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5334.113064655203!2d72.88238325903872!3d19.029082393941017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf8b16c0802b%3A0xf0497653109e210!2sAnik%20village%20MS!5e0!3m2!1sen!2sin!4v1699005870173!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Chembur": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30171.01728737363!2d72.88061881812823!3d19.047148023847768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5ede708d39d%3A0xd81ae764fa3f136d!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699005978033!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Bhandup": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30152.623040737308!2d72.91120341823276!3d19.148067943989616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b87a44f8447b%3A0xa699c98b692d3c18!2sBhandup%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699006059493!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Mulund": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30151.625759423634!2d72.94461491823847!3d19.153524892371937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8edba39322f%3A0x80da2c634844abaf!2sMulund%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699006170012!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Hariyali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.465285479686!2d72.921881963276!3d19.102552289915764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7bade87bd97%3A0xc63db5bd386137ee!2sHariyali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699006253546!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Kanjur": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.565840134774!2d72.92368921328418!3d19.13433448561399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c788a68363c1%3A0x84a156fa456a87e!2sKanjurmarg%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699006390910!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Mahul": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.633063345456!2d72.88390826325295!3d19.012746452039295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf5d5b81811f%3A0x5daf4ae988dfc3c6!2sMahul%2C%20Trombay%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699006523041!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Paspoli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3867565045693!2d72.89217652596639!3d19.134540550130613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ffca4770cb%3A0x90b29b642c030316!2sPasspoli%2C%20Goregaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699006640327!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Powai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30156.819798207318!2d72.8844494182089!3d19.125087600798377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8081c1d7b43%3A0xbaf100c54b8be366!2sPowai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699006828776!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Turbhe": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.018185257393!2d73.01131976326879!3d19.074526543704213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1696105a4a7%3A0x96b82e027d566ea6!2sTurbhe%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699006931653!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Vadhavali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7529.246875906515!2d72.824438126988!3d19.342139864545683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae44795435eb%3A0xc98dc5f3c03f477e!2sVadavali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699007002050!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Vikhroli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30163.290790685125!2d72.91865106817211!3d19.08960196130094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7bc7c814b5d%3A0x6ad25b348f9b9dc6!2sVikhroli%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699007071476!5m2!1sen!2sin",

                    // "dwgURL": " ", 
                },
            },
            //taluka4
            "Borivli": {
                "Akshe": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2428803729454!2d72.81745248595095!3d19.228243800799408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b148b3e8eaa3%3A0x3f0d1021b88f0c19!2sAkshay!5e0!3m2!1sen!2sin!4v1699007410708!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Charcop": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7535.15208281084!2d72.81137664517644!3d19.213711059318864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6b27a3c5bb9%3A0xedaacc4beb1609f9!2sKandivali%2C%20Charkop%20Gaon%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699007533477!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Chinchwali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7546.020714969223!2d73.37588014516135!3d18.97514997468943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f9f241a5936d%3A0xf509d3868767df5e!2sChinchwali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699008613273!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Dharvali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4706089395713!2d72.79453897596706!3d19.17463689886704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b42c1a28f689%3A0xb77350be6019d434!2sDharvali%2C%20Aksa%20Gaon%2C%20Madh%2C%20Mumbai%2C%20Maharashtra%20400061!5e0!3m2!1sen!2sin!4v1699008710294!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Eksar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7533.855009086918!2d72.83049709517861!3d19.241991007485364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1214b7f43ff%3A0x33b595b5882ad9e9!2sEksar%2C%20Borivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699009063028!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Eksar Pahadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.960462836442!2d72.83873858595241!3d19.24055480038496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b120ad32b5df%3A0xfae650c4f453eeb2!2sPahadi%20eksar!5e0!3m2!1sen!2sin!4v1699009304233!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Erangal": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.384914023717!2d72.7819831388282!3d19.161550079123067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b5cbd4be3541%3A0x2c3ab7a81d8e1c9a!2sErangal%20Beach!5e0!3m2!1sen!2sin!4v1699009397052!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Gorai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.940889582351!2d72.77798577596806!3d19.24140774675749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b3bf58ca6803%3A0x18a425aede0551a6!2sGorai%20Beach!5e0!3m2!1sen!2sin!4v1699009458989!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Kalerabad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d144746.3869647453!2d72.98352383513074!3d17.571964739911373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skalerabad%20borivali%20mumbai%20maharashtra!5e0!3m2!1sen!2sin!4v1699011427269!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Kandivali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42632.0600739632!2d72.80792707441061!3d19.18745484648866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c7d151eb11%3A0x53c60cb900ce3b40!2sKandivali%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699010205277!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Malad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.587478119634!2d72.81240471329825!3d19.188786478230135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6914fe3a8e5%3A0x73f264109c4db9d4!2sMalad%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699010706587!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Malwani": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.89057583248!2d72.81036676329738!3d19.185475528679635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b691a605a451%3A0x462b7b4b52597fe9!2sMalad%2C%20Malvani%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699010777254!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Manori": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15070.83759209608!2d72.7851447633032!3d19.20789097563542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b3f927ed93bb%3A0x903a7170fe3da23e!2sManori%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699010830677!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Marve": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.1580067444465!2d72.79346764517535!3d19.191751410740846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b41f47f97809%3A0xb3a7806bcd83c27a!2sMarve%2C%20Mumbai%2C%20Maharashtra%20400095!5e0!3m2!1sen!2sin!4v1699010882205!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Wadhavan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7501.7794403661965!2d72.66611439522383!3d19.929051512207145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6df2f755bed9b%3A0x12b02fa62698764c!2sVandhavan%2C%20Maharashtra%20401503!5e0!3m2!1sen!2sin!4v1699010990501!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Valnai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0728675137884!2d72.81085003594627!3d19.192019452018034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b69825e2e953%3A0xe225fce859d7f8f5!2sMalad%2C%20Valnai%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400095!5e0!3m2!1sen!2sin!4v1699011098204!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                }
            }
        },

        //District4
        "Raigad": {
            //taluka1
            "Panvel": {
                "Targhar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886.3163551884338!2d73.03699673882745!3d18.99182158175364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c2e27b302915%3A0xbddbafb54c0075af!2sTarghar%2C%20Ulwe%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1699054905592!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/PANVEL/TARGHAR.dwg ",
                },
                "Ulawe": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30182.727117585007!2d73.02629446806166!3d18.982633042876646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c2dfe25c1a09%3A0x484fc4d588630883!2sUlwe%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699054936071!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/PANVEL/ULAVE.dwg",
                },
                "Wahal": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30184.87988366252!2d73.01095531804944!3d18.970749446376768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c32fa9967ced%3A0x50c898235e742afb!2sWahal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699054974201!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/PANVEL/WAHAL.dwg",
                },
                "Kharkopar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.236927185147!2d73.01285687596358!3d18.965141055441993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c34aee81223d%3A0x24d6c04e4722b5c7!2sKhar%20Kopar%2C%20Sector%208%2C%20Ulwe%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1699055035603!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/PANVEL/KHARKOPAR.dwg ",
                },
                "Gavhan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15093.753440560196!2d72.98901578715815!3d18.956238299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dd4df39aa51d%3A0x1621c79dfe273889!2zR2F2aGFuICjgpJfgpLXgpY3gpLngpL7gpKMp!5e0!3m2!1sen!2sin!4v1699301726935!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/PANVEL/GAVHAN.dwg",
                },
                "Nhava": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7546.41439676426!2d72.95297382679497!3d18.966454641889623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c4cf593abd93%3A0x8a7492db7f8335f6!2sNhava%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699301822868!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/PANVEL/NHAVE.dwg",
                }
            },
            //taluka2
            "Uran": {
                "Gharapuri": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15093.21916956584!2d72.92306216324002!3d18.962142058850027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5303c99a3c7%3A0x9ac64c29060b4e2b!2sElephanta%20Island!5e0!3m2!1sen!2sin!4v1699055477642!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/GHARAPURI/GHARAPURI.dwg",
                },
                "Juna Sheva": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30191.276917831696!2d72.93926541801314!3d18.935394456780855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7db3ce5ae825f%3A0x24b04102a21c62d9!2sJuna%20Sheva%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699055511457!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/JUNA SHEVA/JUNA SHEVA.dwg ",
                },
                "Jaskhar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5159140258515!2d72.9795852259627!3d18.9085449572068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7db82d0a4fb29%3A0x72d2319aabe4d394!2sJaskhar%2C%20Maharashtra%20400707!5e0!3m2!1sen!2sin!4v1699055622957!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/JASKHAR/JASKHAR.dwg ",
                },
                "Panje": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7549.3412291057875!2d72.94647209515684!3d18.90168827938817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dbac1cac5e21%3A0x98ee58625c394390!2sPanje%2C%20Navi%20Mumbai%2C%20Maharashtra%20400702!5e0!3m2!1sen!2sin!4v1699055650805!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/PANJE/PANJE.dwg",
                },
                "Funde": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.4529524303648!2d72.96219203882715!3d18.891255083301804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dbb952499d1f%3A0x9f7433a588f5df0d!2sFunde%2C%20Maharashtra%20400702!5e0!3m2!1sen!2sin!4v1699055683262!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/FUNDE/FUNDE.dwg ",
                },
                "Dongari": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14980.205641077344!2d72.84803531356114!3d20.17358484171738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72db17707d079%3A0x36b96bd5f7175b95!2sDongari%2C%20Maharashtra%20401606!5e0!3m2!1sen!2sin!4v1699055711591!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/DONGARI/DONGARI.dwg ",
                },
                "Hanuman Koliwada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.848031487505!2d72.93084827596246!3d18.893821807665024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7da45439f7fed%3A0xf96d338d9db8fff3!2sHanuman%20Koliwada%2C%20Maharashtra%20400702!5e0!3m2!1sen!2sin!4v1699055749566!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/HANUMAN KOLIWADA/HANUMAN KOLIWADA.dwg ",
                },
                "Boripakhadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15098.676436315141!2d72.9250453132246!3d18.90175501695783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7da5745d79169%3A0xf8cfde0d13c3a24b!2sBoripakhadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699055792832!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/BORIPAKHADI/BORIPAKHADI.dwg ",
                },
                "Ranwad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.68138995191!2d72.90670212806003!3d18.881292764071297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7da69e58e93f5%3A0x1457d4f2ce66d154!2sRanwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699308341452!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/RANWAD/RANWAD.dwg",
                },
                "Kegaon(CT) ": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1010663341062!2d72.92013727596225!3d18.882597058014113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7da40031dc0cb%3A0xd22f2049c224b81d!2sKegaon%20Rd%2C%20Uran%2C%20Navi%20Mumbai%2C%20Maharashtra%20400702!5e0!3m2!1sen!2sin!4v1699055853339!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/KEGAON/KEGAON.dwg ",
                },
                "Nagaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15101.926698236914!2d72.91694641321551!3d18.86570097178845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7da399036d4c1%3A0x94a2276be3991f33!2sNagaon%2C%20Uran%2C%20Navi%20Mumbai%2C%20Maharashtra%20400702!5e0!3m2!1sen!2sin!4v1699308420259!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/NAGAON/NAGAON.dwg",
                },
                "Mhatwali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30204.191453896456!2d72.91792416793994!3d18.86382417780014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d981a88fc179%3A0x59461d93cb4b3c26!2sMhatwali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699055919366!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/MHATAVALI/MHATVALI.dwg ",
                },
                "Chanje (CT)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.601114254944!2d72.94722017596202!3d18.86039575870419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d97ff21418d7%3A0x3d4b61e50759ce5d!2sChanje%20St%2C%20Uran%2C%20Navi%20Mumbai%2C%20Maharashtra%20400702!5e0!3m2!1sen!2sin!4v1699055972814!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/CHANJE/CHANJE.dwg ",
                },
                "Navin Sheva": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.34482077883!2d72.94916502596216!3d18.871777908350516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dbd226e5b821%3A0xe6f0d88cdaf96354!2sNavin%20Sheva%2C%20Navi%20Mumbai%2C%20Maharashtra%20400702!5e0!3m2!1sen!2sin!4v1699056012182!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/NVINSHEVA/NAVIN SHEVA.dwg ",
                },
                "Bhendkhal": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1179432202384!2d72.97852798590677!3d18.881848162372723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dbf18ef530cf%3A0x943a4cbf821f26a!2sBhendkhal%2C%20Maharashtra%20400707!5e0!3m2!1sen!2sin!4v1699056042797!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/BHENDKHEL/BHENDKHEL.dwg ",
                },
                "Navghar(CT)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.9110864967165!2d72.9834330259625!3d18.891025257752155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7db8c8b3e0185%3A0x25ea9e4d9fdf7d89!2sNavghar%2C%20Navi%20Mumbai%2C%20Maharashtra%20400707!5e0!3m2!1sen!2sin!4v1699056077182!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/NAVAGHAR/NAVAGHAR.dwg ",
                },
                "Dhasakhosi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.2411500919366!2d73.00789497596215!3d18.876380108207613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dc1a2cd91acd%3A0x6af1ffe1ca99057f!2sDhasakhosi%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1699056117885!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/DHAKAOSHI/DHAKOSHI.dwg",
                },
                "Bandhpada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59946.20704722409!2d72.71086577883432!3d20.1074163393148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72991f51b5633%3A0x76c6e1de285b528f!2sBordi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699035518751!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/BANDHPADA/BANDHPADA.dwg",
                },
                "Kacherpada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7550.663190563814!2d73.0020750951547!3d18.872365081259392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dc1c906cafa9%3A0xe3b19e84789ff70a!2sBandhpada%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1699056172613!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/KACHAREPADA/KACHAREPADA.dwg ",
                },
                "Pirkone": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15103.43071188618!2d72.99638021321122!3d18.848994974024187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7deb994978ae9%3A0x928226c64b233fcf!2sPirkone%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1699056203341!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/PIRKON/PIRKON.dwg",
                },
                "Sangpalekhar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7552.015863843014!2d72.99127009515291!3d18.842315133173976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7deca6180fb9f%3A0x357cea8b08e31827!2sSangpalekhar%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1699056239749!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/SANGPALKHAR/SANGPALKHAR.dwg",
                },
                "Govthane": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.05426125497!2d72.99126507596165!3d18.840255009329624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7decb29d374f3%3A0x78f0e51aaa7ce8a7!2sGovthane%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1699056268389!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/GOVATHANE/GOVATHANE.dwg",
                },
                "Aware": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105.512348331406!2d72.98196112304389!3d18.825849398304015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ded6dab6c1cd%3A0xc9d8e788b3aa6ab8!2sAware%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699056302453!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/URAN/AAVARE/AAVARE.dwg ",
                },
            },
            //taluka3
            "Pen": {
                "VitthalWadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15069.343219672106!2d73.14282336330741!3d19.224191423419875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7944744f1b2bb%3A0xf59566d62d8bde40!2sVitthalwadi%2C%20Ulhasnagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699056340565!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/PEN/VITTHALVADI.dwg",
                },
                "Mothe Bhal": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15109.05281378584!2d72.99051531319547!3d18.78642008238399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7df4e20973919%3A0x4289a7e3d8f25d5!2sMothe%20Bhal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699056407285!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/PEN/MOTHEBAL.dwg ",
                },
                "Lakhola": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15110.27323141811!2d73.003425213192!3d18.772810084199214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be875f4569b6817%3A0xbc2e458864ff70c4!2sLakhola%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699308571490!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/PEN/LAKHOLA.dwg ",
                },
            },
            //taluka4
            "Alibag": {
                "Ramkotha": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7554.917419852479!2d72.97886014514886!3d18.777700087281872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d8a8ddc3b2f1%3A0xb3e55fe43efc0a0!2sRamkotha%2C%20Maharashtra%20402209!5e0!3m2!1sen!2sin!4v1699056797701!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/RAMKOTHA.dwg",
                },
                "Sonakothakhar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.6163759362753!2d72.96169507596066!3d18.77066501148554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87620b1c5b23d%3A0xfb4bded1b560de69!2sSonakothakhar%2C%20Maharashtra%20402209!5e0!3m2!1sen!2sin!4v1699056828404!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/SONAKOTHA KHAR.dwg ",
                },
                "Hashiware": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.397402418047!2d72.93817339514821!3d18.766990637961683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be877d51de93bf3%3A0x78f5f263c517d6e0!2sHashiware%2C%20Maharashtra%20402209!5e0!3m2!1sen!2sin!4v1699056855964!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/KHAR HASHIVARE_.dwg",
                },
                "Kawade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30218.253755010628!2d72.93057536786026!3d18.785594400710842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d8893a6d7a9f%3A0x98cd466d9d47b8f0!2sKawade%2C%20Maharashtra%20402209!5e0!3m2!1sen!2sin!4v1699056897860!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/KAWADE.dwg",
                },
                "Ranjankhar Davali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15106.347101340294!2d72.93139526320304!3d18.816560128360237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d9ab3f760ecf%3A0xd455b3d0c43a11bb!2sRanjankhar%20Davali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699056936044!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/RANJAN KHAR DAWLI.dwg ",
                },
                "Milkatkhar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7553.94203182153!2d72.9242501951503!3d18.799444985900926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d84433e354a1%3A0x2f3f5251d8783c23!2sMilkatkhar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699056981524!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/MILKATKHAR.dwg",
                },
                "Belpada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71814.18808817095!2d72.94611318698126!3d18.919513328282406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7dc9a997c673b%3A0xa3df44ef37debeda!2sBelpada%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1699308690623!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/BELPADA.dwg",
                },
                "Rewas": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71886.26224679094!2d72.91033611254929!3d18.75102368799244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d869ee90502f%3A0x546b152a1ac539e4!2sRevas%2C%20Maharashtra%20402209!5e0!3m2!1sen!2sin!4v1699057231076!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/REVAS.dwg",
                },
                "Pupadevipada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7554.9187751710415!2d72.91862712669975!3d18.77766985548207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d86e77c303f3%3A0x802c76d1e4d99323!2sPupadevi%20Pada%2C%20Maharashtra%20402209!5e0!3m2!1sen!2sin!4v1699057264603!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/PHUPHADEVIPADA.dwg ",
                },
                "Saral": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15109.53090926955!2d72.90456526319412!3d18.78108953309508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d811a039175d%3A0x242543c5a3752e!2sSaral%2C%20Maharashtra%20402209!5e0!3m2!1sen!2sin!4v1699057320435!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/SARAL.dwg",
                },
                "Virtasaral": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7554.561611775022!2d72.90007014514934!3d18.785635136778083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d8192ecfd48f%3A0xeeae8d7d18cdb478!2sVirtasaral%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699057355315!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/VIRT SARAL.dwg ",
                },
                "Yelwane": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7554.428845862505!2d72.90793019514962!3d18.788595186590083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d817cecf035d%3A0xb93f1f0b1cee8bd9!2sYelwane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699057400747!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/YELVANE.dwg",
                },
                "Mandava Tarf Zirad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7553.978377915576!2d72.89510514515014!3d18.79863513595226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d827ea846809%3A0x640a4214c6be55fd!2sMandava%20Tarf%20Zirad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699057436892!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/MANDAVE TARF ZIRAD.dwg",
                },
                "Dhokawade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15108.793479594207!2d72.87670021319617!3d18.78931093199829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d78d7e27bcbd%3A0xc8a9eb3e5e3a300e!2sDhokawade%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699057464402!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/DHOKVADE.dwg",
                },
                // DWG Not            
                "Murabe": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15018.716185301839!2d72.68066416345115!3d19.76878629851088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6e1edf0c405cb%3A0x5ab0b32b082678d1!2sMurabe%2C%20Nandgaon%2C%20Gundali%2C%20Maharashtra%20401501!5e0!3m2!1sen!2sin!4v1699057499642!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Kolgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7553.9521232481!2d72.87229014515017!3d18.79922013591516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d798481d4b4d%3A0x842022ff13758d8a!2sKolgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699308812838!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/KOLGOAN.dwg",
                },
                "Navedar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171098.58922978025!2d72.63201685264504!3d18.628944663749444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87080b23618c1%3A0xba9767369c078172!2sNavedarbeli%2C%20Maharashtra%20402204!5e0!3m2!1sen!2sin!4v1699057622771!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/NAVEDAR.dwg ",
                },
                "Navedar Kolgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.9864990158208!2d72.86395012596094!3d18.79875501061616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d7a4e3038757%3A0x1904239f4679ace5!2sNavedar%20Kolgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699057652859!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/NAVEDAR KOLGOAN.dwg.dwg ",
                },
                "Sasawane": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.2192969822554!2d72.860453685895!3d18.788377865465385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d7b9b3df52e7%3A0xb7682960ffa9e7e2!2sSasawane%2C%20Maharashtra%20402201!5e0!3m2!1sen!2sin!4v1699057691379!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/SASAWANE.dwg ",
                },
                "Awas": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15110.370722858926!2d72.85419542293461!3d18.7717224573161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d7c64b8844d9%3A0xba3881a50364ad78!2sAwas%2C%20Maharashtra%20402201!5e0!3m2!1sen!2sin!4v1699057727347!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/AWAS.dwg ",
                },
                "Surekhar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7556.017327732199!2d72.86267014514725!3d18.75315003883946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87871980eb08f%3A0x808be913acf66a29!2sSurekhar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699057762179!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/SUREKHAR.dwg ",
                },
                "Agarsure": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7556.017327732199!2d72.86267014514725!3d18.75315003883946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8786d3deab3e7%3A0x88cd3792ef866161!2sAgarsure%2C%20Maharashtra%20402201!5e0!3m2!1sen!2sin!4v1699057787339!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/AGARSURE.dwg",
                },
                "Bamansure": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7556.770327110886!2d72.87410514514623!3d18.7363251399059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8783eea213303%3A0x92721ac48c8207a0!2sBamansure%2C%20Maharashtra%20402201!5e0!3m2!1sen!2sin!4v1699057817475!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/BAMANSURE_.dwg",
                },
                "Kihim": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7556.770327110886!2d72.87410514514623!3d18.7363251399059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be878481db67e6b%3A0x8a9930e43e583cb4!2sKihim%2C%20Maharashtra%20402201!5e0!3m2!1sen!2sin!4v1699057854732!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/KIHIM.dwg ",
                },
                "Nevedar beli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7561.562551539547!2d72.8992851951397!3d18.628905146694073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87080b23618c1%3A0xba9767369c078172!2sNavedarbeli%2C%20Maharashtra%20402204!5e0!3m2!1sen!2sin!4v1699057888563!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/NAVEDAR BELI.dwg ",
                },
                "Navagaon Boris": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120588.10968307397!2d72.67284984413968!3d19.178666863681322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e247071a3f%3A0x29154d3311e34783!2sNavagaon%2C%20Mandapeshwar%2C%20Dahisar%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699057951386!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/NAVAGAON BORIS.dwg",
                },
                "Thal": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15116.456736636977!2d72.84949357279774!3d18.703705418620263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be879b0ab044447%3A0xd3a6c070ae23af9!2sThal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699057996242!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/Thal.dwg ",
                },
                "Lonare": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7559.0767462203685!2d72.86693514514292!3d18.6846999931725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8799257a4b5d9%3A0x52a9cb417be77ed5!2sLonare%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058025610!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/LONARE.dwg ",
                },
                "Varasoli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.042051067386!2d72.87919752664226!3d18.663052463685755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87a26a8af6ead%3A0xb1b08b42640e0a00!2sVarasoli%2C%20Alibag%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058061610!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/varsoli.dwg",
                },
                "Chendhare(CT)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.1856481744835!2d72.87231019514155!3d18.659830144743363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87a1787cf5aa5%3A0x55c87116beaa1c10!2sChendhare%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058099002!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/CHENDHARE.dwg",
                },
                "Alibag(MCI)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.777055703263!2d72.86800509357907!3d18.64655330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87a6ae42e15f5%3A0xd2dd7a1903dfaef5!2sAlibag%20Municipal%20Council!5e0!3m2!1sen!2sin!4v1699058186162!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/ALIBAG CT.dwg ",
                },
                "Kurul(CT)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.843704314169!2d72.88891754514057!3d18.645056495675504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87a766c5573f5%3A0x4fb86b174d8c63b8!2sKurul%2C%20Alibag%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058229138!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/KURUL GEO.dwg ",
                },
                "Akshi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15123.127286865089!2d72.88009276315593!3d18.628880603329417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87a87650a9469%3A0xf9f5a5a14cefba60!2sAkshi%2C%20Maharashtra%20402204!5e0!3m2!1sen!2sin!4v1699058265586!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/AKSHI.dwg ",
                },
                "Navedar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7642.036918852219!2d73.33760017572644!3d16.72593074675493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7b06edcde483%3A0xcf5779c3c0dc06c5!2sNavedar%2C%20Maharashtra%20416707!5e0!3m2!1sen!2sin!4v1699058307777!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/NAVEDAR.dwg",
                },
                "Nagaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.552180315013!2d72.89358001315195!3d18.612859705451307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8706e5aa98a39%3A0xe10d971d3317c28!2sNagaon%2C%20Maharashtra%20402204!5e0!3m2!1sen!2sin!4v1699309005738!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/NAGAION.dwg",
                },
                "Choul": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.584916404863!2d72.93311776314066!3d18.567445061458116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86fa39749ba83%3A0xb651e2f709916f62!2sChaul%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058379170!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/CHOUL.dwg ",
                },
                "Revdanda": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.852908435512!2d72.91374031313708!3d18.553143413347254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86fb8bfbfe877%3A0x8b1110faa5e565fe!2sRevdanda%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058418169!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/REVDANDE.dwg ",
                },
                "Agarkot": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15130.151406586723!2d72.93265966313623!3d18.549775113791995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86fadea5f79fd%3A0xcf781245688ea759!2sAgarkot%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058444889!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/ALIBAG/AAGARKOT KILLE.dwg",
                },
            },
            //taluka5
            "Murud": {
                "Salav": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.816498824883!2d72.93109036313159!3d18.53097511627312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86f03758fbcdd%3A0x1e535d48fe3df214!2sSalav%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058603577!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/SALAV.dwg ",
                },
                "Korlai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.918747023947!2d72.90891521313131!3d18.529820066425472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86f73a65ce2e9%3A0x301770f5e8e13ba3!2sKorlai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058669066!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/KORLAI.dwg",
                },
                "Borli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.678293333679!2d72.91206514513242!3d18.513570103943707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86f41f03ac713%3A0x2bdc48058d1cdc5f!2sBorli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058710850!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/BORLI.dwg ",
                },
                "Surai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.678293333679!2d72.91206514513242!3d18.513570103943707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86f40d7f581a5%3A0x5bb649310772b149!2sSurai%2C%20Maharashtra%20402202!5e0!3m2!1sen!2sin!4v1699058752402!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/SURAI.dwg",
                },
                "Kolmandale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7567.226034327972!2d72.90563519513172!3d18.50118010472001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86f4fe19f4515%3A0xed630fd1aaffcbe5!2sKolmandale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058788773!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/KOLMANDALE.dwg ",
                },
                "Mandala": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15135.35742883147!2d72.90837097237284!3d18.490934353833538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be868cb676b621f%3A0xce73a2f3b249e79e!2sMandala%2C%20Maharashtra%20402202!5e0!3m2!1sen!2sin!4v1699058823873!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/MANDALE.dwg",
                },
                "Barashiv": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15136.254670259319!2d72.89372531311919!3d18.480775072888104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be868a8cf9b3a57%3A0x2a4a0af1342a700!2sBarashiv%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058872793!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/BARSHIV.dwg",
                },
                "Tembhode": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15025.12608593091!2d72.74632276343289!3d19.700635007979294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d1e779363c1%3A0x967b1d932ebab209!2sTembhode%2C%20Palghar%2C%20Maharashtra%20401404!5e0!3m2!1sen!2sin!4v1699058907681!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/TEMBHODE.dwg ",
                },
                "Bhoighar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30274.855465139633!2d72.90675046754055!3d18.46748459317966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be868ea3a4c62d5%3A0xf49fccd76917b0f1!2sBhoighar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058937561!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/BHOIGHAR.dwg ",
                },
                "Kashid": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15139.839662858423!2d72.89749611310914!3d18.440129028233315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8687c8a4e9b5d%3A0x8d857627a2ac7f9d!2sKashid%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058973616!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/KASHID.dwg ",
                },
                "Sarve": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15139.839662858423!2d72.89749611310914!3d18.440129028233315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be868402077601d%3A0xefc77540f7fa637d!2sSarve%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699058999329!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/SARVE.dwg",
                },
                "Donde tarf nandgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15142.969288072836!2d72.91129026310037!3d18.404575032900915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8681f43190319%3A0xbf671f9c0c4aa271!2sDonde%20Tarf%20Nandgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699059065304!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/MAJGAON.dwg ",
                },
                "Adhi (pangole)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7571.761833722131!2d72.90963024512536!3d18.398270111151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be842a76bc04b15%3A0x8860f9d3835622bb!2sAdhi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699059117072!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/ADHI.dwg ",
                },
                "Nandgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42836.25072666349!2d72.92400230718582!3d18.382588963391047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84296cea86691%3A0x262653e00657e6f5!2sNandgaon%2C%20Maharashtra%20402401!5e0!3m2!1sen!2sin!4v1699309526312!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/NANDGAON_.dwg ",
                },
                //DWG Not               
                "Khaire Tarf Wada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120203.81032493549!2d73.05390008152898!3d19.696905042011334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7727ece0a4c7d%3A0x648791294734b3c4!2sKhaire%20Tarf%20Wada%2C%20Maharashtra%20421303!5e0!3m2!1sen!2sin!4v1699059295791!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                " Khardodkule": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7572.472749708034!2d72.93320019512434!3d18.3820901621593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8428c5c855be1%3A0xd1bae9f9db870eb7!2sKhardodkule%2C%20Maharashtra%20402401!5e0!3m2!1sen!2sin!4v1699059376992!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/KHARDODKHULE.dwg ",
                },
                "Mazgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30187.942575967925!2d72.82161486803207!3d18.95383055135728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3774ef091d%3A0x5e7c5891576f2b65!2sMazgaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699059409880!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/MAJGAON.dwg",
                },
                "Sarane nandgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15146.425374403767!2d72.91996031309074!3d18.365235088056945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be842e596924a1b%3A0x393fd83e1aacbca8!2sSarane%20Nandgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699059446375!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/SARANE NANDGAON.dwg",
                },
                "More": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15147.424736312945!2d72.90676107210174!3d18.353844376402222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8431e3acedd35%3A0xcd82181bd7bbb778!2sMore%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699059481632!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/MORE.dwg",
                },
                "Vihour": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15147.296605632768!2d72.94120021308831!3d18.355305189356955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be843ab671f8653%3A0x1f668666a527332!2sVihour%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699059650823!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/VIHOUR.dwg ",
                },
                //DWG Not               
                "Panju": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15059.477566092584!2d72.84396876333538!3d19.33147300879958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7afca4b52a1e9%3A0xf198fe03e48c5139!2sPanju%20Island%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699059693335!5m2!1sen!2sin",
                    // "dwgURL": " ",
                },
                "Murud janjira(MCI)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15151.073464302714!2d72.95261546307775!3d18.312198144993772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84391c8d3585f%3A0xfaab0381ef8b2b4c!2sMurud%20-%20Janjira%20Municipal%20Council!5e0!3m2!1sen!2sin!4v1699059763775!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/MURUD RURAL.dwg",
                },
                "Eakdara": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7575.373640651316!2d72.95031812647044!3d18.315924888308295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84388e87e9ccb%3A0xae797396aa943bcb!2sEakdara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699060088255!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/EKDARA.dwg ",
                },
                "Telwade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15148.151189270993!2d72.96618521308591!3d18.34555999063223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be843c5cf80d7c1%3A0x5bad555bd6995649!2sTelwade%2C%20Maharashtra%20402401!5e0!3m2!1sen!2sin!4v1699060128311!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/TELWADE.dwg",
                },
                "Rajpuri": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7575.878147505533!2d72.96694544511959!3d18.304394216989515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8440cfd02ef8d%3A0x39aed50799f2522f!2sRajapuri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699060163798!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/RAJPURI.dwg",
                },
                "Amboli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15343.48195675893!2d73.99427946255095!3d15.968138334981136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc077a18e5891ab%3A0x37b84c05e0a2123f!2sAmboli%2C%20Maharashtra%20416510!5e0!3m2!1sen!2sin!4v1699060195382!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/AMBOLI.dwg",
                },
                "Haphijkhar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121243.80392176795!2d73.09057282933664!3d18.261831776457452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8469743b9f1e7%3A0xfb1d65b2a4e540b2!2sHaphijkhar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699309685461!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/HAFIJKHAR.dwg ",
                },
                "Agardande": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.487169684832!2d72.99160922595303!3d18.27931617649772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84682ac109c7d%3A0x8cfaacd9a82387ab!2sAgardanda%2C%20Maharashtra%20402401!5e0!3m2!1sen!2sin!4v1699060553454!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/AGARDANDE.dwg ",
                },
                "Nandale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7576.5545000652!2d73.00257807645721!3d18.288924940209355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84694137eb149%3A0x1a6a1cfec8ef0f95!2sNandale%2C%20Maharashtra%20402401!5e0!3m2!1sen!2sin!4v1699060600365!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/NANDALE.dwg ",
                },
                "Usadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15153.846120680602!2d73.01836026307001!3d18.280490049133057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be846f081e9d995%3A0x4ace496184fe226a!2sUsadi%2C%20Maharashtra%20402401!5e0!3m2!1sen!2sin!4v1699060637637!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/USADI.dwg ",
                },
                "Tokekhar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1894.3158421871024!2d73.02801133882467!3d18.272698392653652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be846f8044f282d%3A0xc2eff6cd952e3c0f!2sTokekhar%2C%20Maharashtra%20402401!5e0!3m2!1sen!2sin!4v1699060672374!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/TOKEKHAR.dwg ",
                },
                "Sawali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7577.283816606575!2d73.03628514511769!3d18.27223011898381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be847aaba2a70df%3A0xea987880b11e7678!2sSawali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699060702902!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/SAWLI.dwg ",
                },
                "Mithekhar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.6111335834223!2d72.96048943882566!3d18.51885533896733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86ee9d981e5f7%3A0xb03cb6f9dac2052c!2sMithekhar%2C%20Maharashtra%20402202!5e0!3m2!1sen!2sin!4v1699060732614!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/MITHAKHAR.dwg ",
                },
                "Khamde": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15155.244812145189!2d73.04237962192617!3d18.264474441064365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be847a2c7df8d85%3A0xab62f679b676b889!2sKhamde%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699060768093!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MURUD/KHAMADE.dwg",
                },
            },
            //taluka6
            "Tala": {
                "Kude": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15154.100343402479!2d73.05862521306929!3d18.277580099512644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84775c155d413%3A0xcbc046ead14a125a!2sKude%2C%20Maharashtra%20402111!5e0!3m2!1sen!2sin!4v1699060820429!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/TALA/KUDE.dwg",
                },
                "Rowala": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15155.784596628786!2d73.06744031306464!3d18.258290052027633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8478dc15a101f%3A0xf683515483f275d4!2sRowala%2C%20Maharashtra%20402111!5e0!3m2!1sen!2sin!4v1699060848926!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/TALA/ROWALA.dwg ",
                },
                "Washi Haveli ": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30318.36560262633!2d73.06015051729581!3d18.219309764543798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8481b4c78e6c5%3A0xbd5a530810403404!2sWashi%20Haveli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699060885062!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/TALA/WASHI HAVELI.dwg ",
                },
            },
            //taluka7
            "Mhasala": {
                "Waral": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30318.36560262633!2d73.06015051729581!3d18.219309764543798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84867af8428f5%3A0xc08b68344fa79b71!2sWaral%2C%20Maharashtra%20402403!5e0!3m2!1sen!2sin!4v1699060934221!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MHASALA/WARAL.dwg ",
                },
                "Kalsuri": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1894.856695238324!2d73.03810163882453!3d18.223089943390917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84880eea7863f%3A0x4d612dd148000a58!2sKalsuri%2C%20Maharashtra%20402403!5e0!3m2!1sen!2sin!4v1699060958277!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MHASALA/KALSURI.dwg",
                },
                "Turumbade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15167.819645733693!2d73.13149526303108!3d18.11987327000985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8344991770825%3A0x3f2b7a3e23001e88!2sTurumbadi%2C%20Maharashtra%20402105!5e0!3m2!1sen!2sin!4v1699060986861!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MHASALA/TURUMBADI.dwg",
                },
                "Rohinikond": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7579.02446532226!2d73.01241509511516!3d18.23232517145392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be846220d401875%3A0x97c7c8d4430e04ad!2sRohinikond%2C%20Maharashtra%20402403!5e0!3m2!1sen!2sin!4v1699061012909!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MHASALA/ROHINIKUND.dwg",
                },
                "Adi Thakur": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15157.984890373686!2d72.99996016305847!3d18.23306000531374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8461bcd632a09%3A0xa6071886594b81f8!2sAdi%20Thakur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699061044605!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/MHASALA/ADI TAKUR.dwg",
                },
            },
            //taluka8
            "Shrivardhan": {
                "Harvit": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21435.815252995617!2d72.97012445354548!3d18.239651602694938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be845ea8eb98299%3A0x89aca2bb207f312c!2sHarvit%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699115832250!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/HARVIL/HARVIT.dwg ",
                },
                //dwg not            
                "Kudgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7578.717851191331!2d72.96321119511568!3d18.239360521018558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be845c092b29641%3A0xab4c33a23708db21!2sKudgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699309908391!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/KUDGAON/KUDGAON.dwg ",
                },
                "Karlas": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.1288832198875!2d72.9588462358283!3d18.249912383031543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be845b9582c1853%3A0xd8a83247fa032c1b!2sKarlas%2C%20Maharashtra%20402402!5e0!3m2!1sen!2sin!4v1699115975313!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/KARLAS/KARLAS.dwg ",
                },
                "Dighi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7577.586119432129!2d72.96453339511723!3d18.26530576941275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be845b55666cc11%3A0x5bfb127a86bcf501!2sDighi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116008049!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/DIGHI/Dighi.dwg ",
                },
                "Nanavali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15154.352788906406!2d72.94201021306861!3d18.274690049889575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84450cdd48715%3A0x4742b3d93997e27d!2sNanavali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116050378!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/NANAVALI/nanvali.dwg ",
                },
                "Maneri": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25487.03315224148!2d72.94722245309462!3d18.270936740748215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be844566a677e5d%3A0xc0e82a9fcd1f4606!2sManeri%2C%20Maharashtra%20402403!5e0!3m2!1sen!2sin!4v1699309984017!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/MANERI/maneri.dwg",
                },
                "Sarve": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15141.202094281662!2d72.90296607224157!3d18.42465931475591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be868402077601d%3A0xefc77540f7fa637d!2sSarve%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699310042873!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/SURVE/SURVE.dwg ",
                },
                "Adgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7579.4052122316125!2d72.93731019511469!3d18.22358517199418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8457ed049fb2b%3A0xaa9c708ac70f0895!2sAdgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699310096400!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/ADGAON/ADGOAN.dwg",
                },
                "Kunbiwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15238.703106793824!2d73.19744106283517!3d17.282913876337872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1db5a425805d%3A0x8246ec46f9bc1e87!2sKunbiwadi%2C%20Maharashtra%20415614!5e0!3m2!1sen!2sin!4v1699116196466!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/KUMBIWADI/KUNBI WADI.dwg",
                },
                "Velas Agar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15160.798751016922!2d72.96770526305063!3d18.200745159517147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84f470f0f2b31%3A0x98e5ba9301944d0b!2sVelas%20Agar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116227741!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/VELAS AGAR/VELAS AGAR.dwg",
                },
                "Velas": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15160.100848214177!2d72.98034526305258!3d18.2087651584745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84f4d01441e43%3A0x11ffc7e103cc2eb0!2sVelas%2C%20Maharashtra%20402403!5e0!3m2!1sen!2sin!4v1699116259333!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/VELAS/VELAS.dwg",
                },
                "Vadavali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7529.246867307031!2d72.82903014518487!3d19.34214005097342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae44795435eb%3A0xc98dc5f3c03f477e!2sVadavali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116292638!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/VADAVALI/VADAVALI.dwg",
                },
                "DiveAgar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15162.958650860674!2d72.96756472175298!3d18.17590285555606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84ed60603fad5%3A0x6300c742617257a2!2sDiveagar%2C%20Maharashtra%20402404!5e0!3m2!1sen!2sin!4v1699116338182!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/DEVAAGHR/DEOGHAR.dwg ",
                },
                "Karle": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15165.092313647603!2d72.99535531303866!3d18.15133006593307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84946239e3a15%3A0x5e6b5f491cb11781!2sKarle%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116369121!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/KARLE/KARLE.dwg ",
                },
                "Bharadkhed": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15166.069949365867!2d72.97912026303592!3d18.14006016739431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84eadb100aef7%3A0x650ed7c2c70e335b!2sBharadkhol%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116394697!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/BHARADKHED/BHARADKHED.dwg",
                },
                "Shekhadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15167.826025888697!2d72.97450111303107!3d18.11979962001939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84c0e5fc3d9c9%3A0x10535fc90fb68c4b!2sShekhadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116422873!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/SHEKHADI/Shekhadi.dwg",
                },
                "Kondivali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15167.826025888697!2d72.97450111303107!3d18.11979962001939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84b8bbf67c3d3%3A0x43f1cd2bec484379!2sKondivali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116451689!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/KONDIVALI/KONDIVALI.dwg",
                },
                "Khargaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203676.96276111726!2d73.02384829981408!3d18.456679457073474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be81532ec950645%3A0x22341f87bb3b9bf9!2sKhargaon%2C%20Maharashtra%20402109!5e0!3m2!1sen!2sin!4v1699310173489!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/KHARGAON/KHARGOAN.dwg",
                },
                "Walwati": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30288.011694365316!2d72.94375046746646!3d18.392784614731728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84272065c1dc7%3A0xe93863ced885daa2!2sWalwati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116514022!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/WALWATI/WALVATI.dwg",
                },
                "Walwati KH.": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30288.011694365316!2d72.94375046746646!3d18.392784614731728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84272065c1dc7%3A0xe93863ced885daa2!2sWalwati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116547488!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/WALWATI KH/WALWATI KH.dwg ",
                },
                "Shrivardhan(MCI)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.4276388310473!2d73.0121752759496!3d18.051747283325454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84bfab550d42f%3A0x5bae0fc43123a91c!2smaharshi%20karve%20model%20college%20shriwardhan!5e0!3m2!1sen!2sin!4v1699116581704!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/SHRIVARDHAN(MCI)/SHRIVARDHAN (MCI).dwg  ",
                },
                "Shrivardhan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30347.450141324884!2d72.99749831713272!3d18.05157911238946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84b37c141c537%3A0x42339d460add46f5!2sShrivardhan%2C%20Maharashtra%20402110!5e0!3m2!1sen!2sin!4v1699116619216!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/SHRIVARDHAN/SHRIVARDHAN.dwg ",
                },
                "Kalinje": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15174.904440065135!2d73.02636026301141!3d18.037910180604886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b4d427aac709%3A0x68ce1477f0d907b0!2sKalinje%2C%20Maharashtra%20402110!5e0!3m2!1sen!2sin!4v1699116648928!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/KALINJE/KALINJE.dwg ",
                },
                "Kuravade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30231.340339072896!2d73.37002536778621!3d18.712509472053977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be803ddc5b5e22b%3A0xff4dbacd883a27be!2sKurvande%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116692600!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/KURAVADE/KURAVADE.dwg",
                },
                "Maral": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1907.3256038906632!2d73.72926954852929!3d17.04077034995375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1e99bb7b51a71%3A0xc306d6f30b120638!2sMaral%2C%20Maharashtra%20415804!5e0!3m2!1sen!2sin!4v1699116723488!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/MARAL/MARAL.dwg",
                },
                "Devaghar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15178.408815299035!2d73.01874031300164!3d17.997235135848122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b4f801454f0d%3A0x5bbc8ec51c78b0ee!2sDevaghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116754657!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/DEVAAGHR/DEOGHAR.dwg ",
                },
                "Danda": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15178.408815299035!2d73.01874031300164!3d17.997235135848122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b507329f15b5%3A0x6263b76cb3de57c8!2sDanda%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699116783488!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/DANDA/DANDA.dwg",
                },
                "Bagmandla": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.70176771279!2d73.04936197594866!3d17.992606985086802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b5a5ea40a805%3A0xb37b1c7a29d1c2e5!2sBagmandla%2C%20Maharashtra%20402114!5e0!3m2!1sen!2sin!4v1699116841696!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Raigad/SHRIVARDHAN/BAGMANDALE/BAGMANDLE.dwg",
                },
            },
        },

        //District5
        "Ratnagiri": {
            //taluka1
            "Mandangad": {
                "Walmiki Nagar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.944617004133!2d73.0503171357959!3d17.981313491633976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b5be8db811af%3A0x76a7969a951bc71d!2sValmiki%20Nagar%2C%20Bankot%2C%20Maharashtra%20415208!5e0!3m2!1sen!2sin!4v1699310394352!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/MANDANGAD/WALMIKI NAGAR.dwg ",
                },
                "Bankot": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7589.9633156865075!2d73.0471622451!3d17.979590336985204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b5b77e6f05d1%3A0xd6270ce4ff60bb88!2sBankot%2C%20Maharashtra%20415208!5e0!3m2!1sen!2sin!4v1699116939288!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/MANDANGAD/BANKOT.dwg ",
                },
                "Narayannagar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7590.751370144478!2d73.04393509509899!3d17.961250138104642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b5d10123fc8d%3A0xc1d507b84289290a!2sNarayannagar%2C%20Maharashtra%20415208!5e0!3m2!1sen!2sin!4v1699310495488!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/MANDANGAD/NARAYAN NAGAR.dwg ",
                },
                "Velas": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15160.100909862957!2d72.97116107181712!3d18.208764450183967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84f4d01441e43%3A0x11ffc7e103cc2eb0!2sVelas%2C%20Maharashtra%20402403!5e0!3m2!1sen!2sin!4v1699116997896!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/MANDANGAD/VELAS.dwg",
                },
                "Sakhari": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15183.096150038522!2d73.05044021298863!3d17.942690192863964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b672793e81f9%3A0x55ff44d932b163f6!2sSakhari%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117025896!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/MANDANGAD/SAKHARI.dwg",
                },
            },
            //taluka2
            "Dapoli": {

                "Kelashi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15185.192171201641!2d73.05234431298285!3d17.918247546002217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b647e34b0e21%3A0xa3b2e3aa33598aae!2sKelshi%2C%20Maharashtra%20415717!5e0!3m2!1sen!2sin!4v1699117073863!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/KELSHI.dwg ",
                },
                "Uttambar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15186.535398517615!2d73.0533528129791!3d17.902566598013678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b7b60763e557%3A0x9873d43fed9e774b!2sUttambar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699310605926!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/UTAMBAR.dwg",
                },
                "Aade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.9001596484077!2d73.06949433578501!3d17.890121444530312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b7c3164054d3%3A0x8e5092a0ec7683a1!2sAade%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117140960!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/ADHE.dwg ",
                },
                "Padale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.9001596484077!2d73.06949433578501!3d17.890121444530312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b7e63cd0efa3%3A0xdee68bc7ec0ffec9!2sPadale%2C%20Maharashtra%20415714!5e0!3m2!1sen!2sin!4v1699117169584!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/PADALE.dwg ",
                },
                "Anjarla": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7594.128091103114!2d73.07157039509434!3d17.882458592902587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c7f72ed87873%3A0x16cbc82f54e5a1de!2sAnjarle%2C%20Maharashtra%20415714!5e0!3m2!1sen!2sin!4v1699117197806!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/ANJARLE.dwg ",
                },
                "Tadachakond": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15189.941807101413!2d73.07627526296962!3d17.862740203115887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b8006be3fb3f%3A0xc258531988a155d!2sTadachakond%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117227063!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/TADACHA KOND.dwg ",
                },
                "Murdi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7595.59642164342!2d73.09764149509232!3d17.848091994989655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c7ec2decf669%3A0xa3cf79a695fa4989!2sMurdi%2C%20Maharashtra%20415714!5e0!3m2!1sen!2sin!4v1699117253943!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/MURDI.dwg",
                },
                "Pandhari": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7595.59642164342!2d73.09764149509232!3d17.848091994989655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c789241b5f4f%3A0x37a0b5ee2de69c72!2sPandhari%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117278146!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/PANDHARI.dwg ",
                },
                "Juikar Mohalla": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.9682449387433!2d73.09241652594646!3d17.840123489603453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c78cefd2e885%3A0x7e0ee55b6188f95e!2sJuikar%20Mohalla%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117306935!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/JUIKAR MOHALLA.dwg",
                },
                "Haral ": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283.166932472199!2d73.68484526271371!3d16.737240343428834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1ce63541020b1%3A0x59d6c2016a5ba9e1!2sHaral%2C%20Maharashtra%20416704!5e0!3m2!1sen!2sin!4v1699117424791!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/HARNAI.dwg ",
                },
                "Adkhal": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15177.501114361792!2d73.21877097142662!3d18.007779282955468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9cdaf1d684473%3A0x1289a1c85a9f77f0!2sAdkhal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117462190!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/ADKHAL.dwg ",
                },
                "Saldure": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.077389232728!2d73.11179347594572!3d17.78805964113753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c73c7f5d88b7%3A0xdcf52b8c3b48c99c!2sSaldure%2C%20Maharashtra%20415713!5e0!3m2!1sen!2sin!4v1699117491678!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/SALDURE.dwg ",
                },
                "Asud": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15196.670689182387!2d73.13565901295101!3d17.78381521319942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c6cdfd3a90c5%3A0x9a4f37f58862775e!2sAsud%2C%20Maharashtra%20415713!5e0!3m2!1sen!2sin!4v1699117532887!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/ASUD.dwg",
                },
                "Ambivali KH": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15174.57925984593!2d73.38525021301228!3d18.041680030118435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9d4ed44a8193d%3A0xc06a63e9c768c983!2sAmbavali%20Kh.%2C%20Maharashtra%20402301!5e0!3m2!1sen!2sin!4v1699117567007!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/AMBIVALI KH.dwg ",
                },
                "Murud": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15149.560501798842!2d72.94901881308199!3d18.32947804273551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84391b2fcfb77%3A0x62c7f6d33c9f6f9!2sMurud%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117598359!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/MURUD.dwg",
                },
                "Karde": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7599.73534338196!2d73.12171764508653!3d17.750873200873986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c0e65d36adc3%3A0xcbe72c77f1b1ec28!2sKarde%2C%20Maharashtra%20415713!5e0!3m2!1sen!2sin!4v1699310733911!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/KARDE.dwg ",
                },
                "Chandranagar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15200.241840619428!2d73.13672026294113!3d17.741790168553603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c10f88e66bed%3A0x227e59666cf79758!2sChandranagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117690127!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/CHADRANAGAR.dwg ",
                },
                "Ladghar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15201.662505585518!2d73.1262811208849!3d17.725045078712412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c1af4f6114b3%3A0xfc889af396a93dd9!2sLadghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117729615!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/LADGHAR.dwg",
                },
                "Tamastirth": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15203.28815086558!2d73.12933201293272!3d17.70586512312237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c1caf1ff1673%3A0x89df9b7b58b0c91a!2sTamastirth%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699117765023!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/TAMASTIRTH.dwg ",
                },
                "Burondi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15205.09952315659!2d73.13088016292771!3d17.684470175839635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ea78ca3d2415%3A0x92635c44e9072a47!2sBurondi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699118060654!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/BURADI.dwg ",
                },
                "Teleshwarbagar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7601.898595168936!2d73.12629509508353!3d17.69985515395043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c033ae7cd861%3A0x2018bdab1fc3bb91!2sTeleshwarnagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699118023502!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/TELESHWAR NAGAR.dwg ",
                },
                "Shital Nagar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30411.31073501694!2d73.1051553167762!3d17.67789981785883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ea8489524d45%3A0xbdfe92dc5b9ec1c1!2sShital%20Nagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699118093094!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/SHITALNAGAR.dwg ",
                },
                "Mahamai Nagar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21503.849598774443!2d73.13375779472877!3d17.67952529276352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9eb4fac54f3c7%3A0x18c828d8358bdfbb!2sMahamai%20Nagar!5e0!3m2!1sen!2sin!4v1699118263949!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/MAHAMAY NAGAR.dwg ",
                },
                "Kolthare": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12789.24498945638!2d73.14196199898521!3d17.637590185424745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ea559d1bde1b%3A0x2e119f99af23f833!2sKolthare%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699118213262!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/KOLTHARE.dwg",
                },
                "Borivali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30137.288553765477!2d72.80673542699762!3d19.23181085045654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b128b333e163%3A0x985640540577af7e!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699118309094!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/BORIVALI.dwg",
                },
                "Panchanadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7604.75443975441!2d73.14849619507959!3d17.632284208012805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ebb6e779ddab%3A0x52d7f9959f5ef2b1!2sPanchanadi%2C%20Maharashtra%20415712!5e0!3m2!1sen!2sin!4v1699118336757!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/PANCHANADI.dwg",
                },
                "Aghari": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15210.55633914562!2d73.1367803629126!3d17.61986523402843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ebbd321773cf%3A0x48cc8933b70e250!2sAghari%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699118369165!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/AGHARI.dwg ",
                },
                "Vanoshi Tarf Panchanadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30420.851350607954!2d73.15164541672314!3d17.62141488366617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ebdd6cae4273%3A0x9cf0f922e2282e5d!2sVanoshi%20Tarf%20Panchanadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699118399349!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/VANOSHI TF PANCHNADI.dwg",
                },
                "Dabhol": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15213.233608047249!2d73.16067177062565!3d17.588084200732585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ec02e931adff%3A0x800083e4c1af2004!2sDabhol%2C%20Maharashtra%20415706!5e0!3m2!1sen!2sin!4v1699118432429!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/DAPOLI/DABHOL.dwg",
                },
            },
            //taluka3
            "Guhagar": {
                "Navanagar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.222272353218!2d73.24810262594632!3d17.82821228995477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c4e0c56b5521%3A0x4b0f6d9c112150e8!2sNavanagar%2C%20Maharashtra%20415712!5e0!3m2!1sen!2sin!4v1699118652429!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/NAVANAGAR/NAVANAGAR.dwg ",
                },
                "Gharatwadi Tarf Veldur": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7608.339614729845!2d73.17774004507477!3d17.54710026311442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ee7f501f98bf%3A0xb3b579ae07eea850!2sGharatwadi%20Tarf%20Veldur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699118954507!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/GHARATWADI TARF VELDUR/GHARATWADI.dwg",
                },
                "Mouje Anjanvel": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15219.341092737413!2d73.16616526288837!3d17.51537514722057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9edfc9c4df25f%3A0xa48c2e4039687ed7!2sMouje%20Anjanvel%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699118987068!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/MOUJE ANJANVEL/MOUJE ANJANVEL.dwg",
                },
                "Peth Anjanvel": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15219.341092737413!2d73.16616526288837!3d17.51537514722057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ec4a5a5f2b5d%3A0xd51369a7d9a3c550!2sPeth%20Anjanwel%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119015716!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/PETH ANJANVEL/PETH ANJANVEL.dwg ANJANVEL.dwg",
                },
                "Katalwadi Tarf Anjanwel": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15217.986626762622!2d73.15931531289213!3d17.53152514518582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9edc325872939%3A0xb0ef5463f39f5716!2sKatalwadi%20Tarf%20Anjanwel%2C%20Maharashtra%20415634!5e0!3m2!1sen!2sin!4v1699119049245!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/KATALWADI TF ANJANWEL/KATALWADI TF ANJANVEL.dwg ",
                },
                "Ranavi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7609.884911630678!2d73.19267019507252!3d17.51026016531408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ee1db2347f15%3A0x7f8b886c432e2ea3!2sRanavi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119078060!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/RANVI/RANVI.dwg",
                },
                "Varchapath Tarf Guhagar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7609.884911630678!2d73.19267019507252!3d17.51026016531408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f1fd231cb08d%3A0x65bb6530360c374a!2sVarachapath%20Tarf%20Guhagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119110060!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/VARCHA PAT/VARCHA PAT.dwg ",
                },
                "Are": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15218.3897914812!2d73.17884602051019!3d17.52671951056781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ee13bde305a3%3A0x60e74765ed975cb6!2sAre%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119142068!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/ARE/ARE.dwg ",
                },
                "Guhagar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30444.891533865677!2d73.17420756658954!3d17.478301973556967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f1f00b7cb059%3A0x642187d87569c0e2!2sGuhagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119170324!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/GUHAGAR/GUHAGAR.dwg ",
                },
                "Kirtanwadi Tarf Guhaghar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.306401705406!2d73.20883014507072!3d17.47630521733752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f1bd37a310a1%3A0x80b66c2d03c27885!2sKirtanwadi%20Tarf%20Guhagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119199740!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/KATALWADI TF ANJANWEL/KATALWADI TF ANJANVEL.dwg ",
                },
                "Asgoli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.977697250839!2d73.19111291287837!3d17.471942502685067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f19ce1aecab3%3A0x7f1bd2639731b1ac!2sAsgoli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119231261!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/ASGOLI/ASGOLI.dwg",
                },
                "Palshet": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.491357161543!2d73.19436526287149!3d17.441860156463363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f16adb63d4ab%3A0x6cd2079e5ddb462c!2sPalshet%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119263572!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/PALSHET/PALSHET.dwg",
                },
                "Maruti Mandirwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.52131763916!2d73.18014102032818!3d17.42951952610741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f145d9326121%3A0xa0a1a60bcdd0d03c!2sMaruti%20Mandirwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119294484!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/MARUTI MANDIR WADI/MARUTI MANDIR WADI.dwg",
                },
                "Adoor": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.7771471695!2d73.20047014506592!3d17.393130172279665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f6954d7000a5%3A0x9f2c69b4a2a8173b!2sAdoor%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119324087!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/ADOOR/ADUR.dwg ",
                },
                "Kond Karul": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.060456862175!2d73.1754902128616!3d17.399060211829735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f6a6dcb90c5b%3A0x7469d5e76c93e47b!2sKond%20Karul%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119358940!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/KONDKARUL/KONDKARUL.dwg",
                },
                "Velaneshvar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7615.6470643601215!2d73.21306694506471!3d17.37222247351879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f65629abb05d%3A0xd844d629c2b231fa!2sVelaneshwar%2C%20Maharashtra%20415729!5e0!3m2!1sen!2sin!4v1699119386155!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/VELNESHWAR/VELNESHWAR.dwg ",
                },
                "Sakhari Agar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7615.263249894622!2d73.2373450950652!3d17.381450122972122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f70f6aefbb0d%3A0xcbcb0776c2c2f4cf!2sSakhari%20Agar%2C%20Maharashtra%20415729!5e0!3m2!1sen!2sin!4v1699119415716!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/SAKHARI AAGAR/SAKHARI AAGAR.dwg  ",
                },
                "Hedavi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15232.045544702232!2d73.21917031285345!3d17.3631851163195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f7ad351a1d23%3A0x99c94f315e940499!2sHedavi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119442172!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/HEDAVI/HEDAVI.dwg ",
                },
                "Naravan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7617.151634018031!2d73.23206309506261!3d17.33600377566207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f7d10ef6a267%3A0xf223d912f3bb71db!2sNaravan%2C%20Maharashtra%20415728!5e0!3m2!1sen!2sin!4v1699119472492!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/NARVAN/NARAVAN.dwg",
                },
                "Karde": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15234.612285193718!2d73.25387526284636!3d17.332280220181154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f7e2cfb25255%3A0x1558fca3ab317af5!2sKarde%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699310998168!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/KARDE/KARDE.dwg ",
                },
                "Rohile": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15234.796081224196!2d73.22595526284586!3d17.3300651704577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f7d66592f56b%3A0xc821f8fb51458988!2sRohile%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699311065624!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/ROHILE/ROHILE.dwg",
                },
                "Tavasalwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15235.79678296087!2d73.24836516284313!3d17.318000221963565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1d4355d4c2ef%3A0x41ae745af6028fb2!2sTavasalwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119558556!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/TASWAL WADI/TAVSAL WADI.dwg ",
                },
                "Padave": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15235.79678296087!2d73.24836516284313!3d17.318000221963565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1d39b801f4db%3A0xf261328be728d449!2sPadave%2C%20Maharashtra%20415613!5e0!3m2!1sen!2sin!4v1699119585292!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/PADAVE/PADAVE WADI.dwg",
                },
                "Tavasal": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15237.073117713802!2d73.23394521283964!3d17.302600273884416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1d13ab04eb61%3A0xbd4f48b0df3ed366!2sTavasal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119615740!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/GUHAGAR/TAWSAL/TAWSAL.dwg ",
                },
            },
            //taluka4
            "Ratnagiri": {
                "Sakhar Mohalla": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7618.743224131771!2d73.21126019506055!3d17.29761027792951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1dbca0b06125%3A0xc5960e5a88a88132!2sSakhar%20Mohalla%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119770259!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/SAKHAR MOHALLA/SAKHARMOHALLA.dwg",
                },
                "Jaigad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7618.9073991144405!2d73.21505524506024!3d17.29364522816334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1dbea780fe23%3A0x9a8e213095dc881c!2sJaigad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119798522!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/JAIGAD/JAIGAD.dwg ",
                },
                "Nandivade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7618.9073991144405!2d73.21505524506024!3d17.29364522816334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1c4cd78ff677%3A0x32dc061da49651d1!2sNandivade%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119828221!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/NANDIVADE/NANDIWADE.dwg ",
                },
                "Sandelavagan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15238.900806917454!2d73.21949112005116!3d17.280524649834373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1cfd11f98731%3A0x2a45e65f68c6291c!2sSandelavagan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119853499!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/SANDELAGAV/SANDE LAVGAN.dwg ",
                },
                "Sandkhol": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7619.965264092092!2d73.21894014505885!3d17.268075179670937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1c598d148985%3A0xcc575dbde50e8d38!2sSandkhol%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119885627!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/SANDKHOL/SANDKHOL.dwg ",
                },
                "Kachare": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15240.862533313235!2d73.21449597000726!3d17.256799603602065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1c8b7260c04d%3A0x48d3ce2d665177d6!2sKachare%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119916763!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KACHARE/KACHRE TARF SAITWADE.dwg ",
                },
                "Chaperi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15241.674160959303!2d73.23434106998911!3d17.246974555161508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1ca28fa8bcc5%3A0x9877382b6e51174c!2sChaperi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119945779!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/CHAPHERI/CHAPHERI.dwg ",
                },
                "Undi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15242.429561157996!2d73.2310202628249!3d17.237825281948474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1c9d4c86cddb%3A0x25f6326f1c72ab1c!2sUndi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699119974180!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/UNDI/UNDI.dwg  ",
                },
                "Reel": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15243.248985436614!2d73.24324521282267!3d17.2278952331825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1b5d67981d3f%3A0xc759c58374c1d06a!2sReel%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699120003034!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/REEL/REEL.dwg ",
                },
                "Marathwada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15239.064163503199!2d73.26417016283415!3d17.27855022688138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1caa47481d13%3A0xf02c27de6c316916!2sMarathwada%2C%20Maharashtra%20415613!5e0!3m2!1sen!2sin!4v1699120043371!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/MARATHWADA/MARATHWADA.dwg  ",
                },
                "Bhandarwada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.899083371581!2d73.27019337593617!3d17.126421260269115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea101f6d40fb55%3A0xe3121fbadfb8911!2sBhandarwada%2C%20Maharashtra%20415615!5e0!3m2!1sen!2sin!4v1699120081819!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/BHANDARWADA/BHANDARWADA.dwg",
                },
                "Kunbiwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15238.703106793824!2d73.19744106283517!3d17.282913876337872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1db5a425805d%3A0x8246ec46f9bc1e87!2sKunbiwadi%2C%20Maharashtra%20415614!5e0!3m2!1sen!2sin!4v1699120112995!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KUNBIWADI/KUNBI WADI.dwg ",
                },
                "Waravade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15244.53949268255!2d73.24606036281912!3d17.21224518512619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1b3efd94db47%3A0xcd7f2d4d5cea92cc!2sWaravade%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699120142555!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/WARAVADE/WARWADE.dwg   ",
                },
                "Malgund": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7624.167049923584!2d73.2618476950531!3d17.166147635659954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1ac6fe6d3135%3A0xbac0f2f565d9ddca!2sMalgund%2C%20Ganpatipule%2C%20Maharashtra%20415615!5e0!3m2!1sen!2sin!4v1699120175195!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/MALGUND/MALGUND.dwg ",
                },
                "Bhandarwada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.899083371581!2d73.27019337593617!3d17.126421260269115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea101f6d40fb55%3A0xe3121fbadfb8911!2sBhandarwada%2C%20Maharashtra%20415615!5e0!3m2!1sen!2sin!4v1699120207322!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/BHANDARWADA/BHANDARWADA.dwg  ",
                },
                "Rahataghar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7624.112497539002!2d73.27056859505315!3d17.167474735582125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea054c830d4429%3A0xc090b343de3766a7!2sRahataghar%2C%20Ganpatipule%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699120241482!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/RAHATGHAR/RAHATGHAR.dwg",
                },
                "Ganapatipule": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30498.80750310438!2d73.25762966629128!3d17.153131613342264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea055561b27b67%3A0xc0450524831ec163!2sGanpatipule%2C%20Maharashtra%20415615!5e0!3m2!1sen!2sin!4v1699120272451!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/GANAPATIPULE/GANPATIPULE.dwg   ",
                },
                "Bhandarpule": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7624.497949396899!2d73.26626864505265!3d17.15809568613166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1ab0a38317f7%3A0x235de55bf1328c95!2sBhandarwada%2C%20Ganpatipule%2C%20Maharashtra%20415615!5e0!3m2!1sen!2sin!4v1699120331034!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/BHANDARPULE/BHANDARPULE.dwg ",
                },
                "Neware": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30503.97080595977!2d73.25631141043671!3d17.121677336477465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0fc14ea50ce5%3A0x83d3317b976c9fb9!2sNeware%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699120363298!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/NEWARE/NEVRE.dwg ",
                },
                "Kajirbhati": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7626.428261755744!2d73.28205934505009!3d17.111051138884022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0fd1c69cf7cb%3A0xdd21ce610820a2d!2sKajirbhati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699120405738!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KAJIRBHATI/KAJIRBHATI.dwg ",
                },
                "Dhokambale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7626.428261755744!2d73.28205934505009!3d17.111051138884022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0e36f890f80b%3A0xbbc0c36e98c7644e!2sDhokamale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699120477779!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/DHOKAMALE/DHOKAMALE WADA.dwg ",
                },
                "Kotavade": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7627.068402548746!2d73.31670279504917!3d17.095422239796974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0e578e83d3f9%3A0x89d4ff92549be79f!2sKotawde%2C%20Maharashtra%20415617!5e0!3m2!1sen!2sin!4v1699120884249!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KOTAVADE/KOTWADE.dwg ",
                },
                "Are": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7628.268502549461!2d73.29356614504742!3d17.06608464150859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0e0b5db1904b%3A0x18afba6906e0e43f!2sAre%2C%20Maharashtra%20415629!5e0!3m2!1sen!2sin!4v1699120910785!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/ARE/ARE.dwg ",
                },
                "Bholewadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.0615824841984!2d73.28769507593553!3d17.069640161879526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0e1026ea9507%3A0xe25ca3eb532874b3!2sBholewadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699311300807!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/BHOLEWADI/BHOLEWADI.dwg ",
                },
                "Basani": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15256.600417956348!2d73.2828060696554!3d17.065308883906926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0e731cb00223%3A0xa2a9f311cdcffcca!2sBasni%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699120968897!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/BASANI/BASANI.dwg ",
                },
                "Mayekarwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15256.600417956348!2d73.2828060696554!3d17.065308883906926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0e090715ca85%3A0x52de12f54887bd80!2sMayekarwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699120992121!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/MAYEKARWADI/MAYEKARWADI.dwg ",
                },
                "Kasarweli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15257.212013753016!2d73.2956652127844!3d17.057825204226795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0ddf355a4805%3A0x5b87ec8330ba365!2sKasarweli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121018344!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KASARWELI/KASARVEL.dwg ",
                },
                "Sadamirya": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15259.08064677278!2d73.25491876277933!3d17.034940257045456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea1212facff741%3A0x9bfc8841abafc1ed!2sSadamirya%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121042832!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/SADAMIRYA/SADAMIRYA.dwg  ",
                },
                "Kalbadevi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7547.22169851731!2d72.8226811451596!3d18.948611576388842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce22280abb1b%3A0xf91b473ffab17efc!2sKalbadevi%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121070857!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KALABADEVI/KALABADEVI.dwg  ",
                },
                "Shirgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.990846576224!2d73.60763041654468!3d17.429829887016034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2031577a267ad%3A0xebaf225c857b59b7!2sShirgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121142449!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/SHIRGAON/SHIRGAON.dwg ",
                },
                "Jakimirya": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7629.808130528228!2d73.26112379504542!3d17.02837514370471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea12724273a035%3A0x9894196897b2dfb3!2sJakimirya%2C%20Maharashtra%20415612!5e0!3m2!1sen!2sin!4v1699121169849!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/JAKIMIRYA/JAKIMIRYA.dwg  ",
                },
                "Mirya": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7629.808130528228!2d73.26112379504542!3d17.02837514370471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0dfcbf52ee13%3A0x6b38eaf33a8a69b8!2sMirya%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121196721!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/MIRYA/WADAMIYA (SADAMIRYA).dwg ",
                },
                "Zadgaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7630.804946676579!2d73.28715664504405!3d17.003917245126818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0d71764fcc5b%3A0x8b2aa742fd2dcdcf!2sZadgaon%2C%20Ratnagiri%2C%20Maharashtra%20415612!5e0!3m2!1sen!2sin!4v1699311472784!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/ZADGAON/ZADGAON.dwg ",
                },
                "Ratnagiri": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61049.66451419362!2d73.28439749372171!3d16.994016644383265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0d1839a6bb7f%3A0x63ab969b79bf6561!2sRatnagiri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121247656!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/RATNAGIRI.dwg  ",
                },
                "Kille ratnagiri": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61048.98504078758!2d73.19438374863277!3d16.996103100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea129b82de8597%3A0xd38137ef65faeec5!2sRatnadurg%20Fort!5e0!3m2!1sen!2sin!4v1699121300736!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KILLE RATNAGIRI/KILLE RATNAGIRI.dwg  ",
                },
                "Karle": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7631.883453186279!2d73.29868952583938!3d16.977416480078904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0d30f0f4c657%3A0x1eb5bc7332f343b7!2sKarle%20Village%2C%20Ratnagiri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121342160!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KARLE/KARLE.dwg   ",
                },
                "Bhatye": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.125462645445!2d73.28855031276557!3d16.97300741465793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0d4a26c806b5%3A0x5998b6af891739ee!2sBhatye%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121372825!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/BHATYE/BHATYE.dwg",
                },
                "Phansop": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.125462645445!2d73.28855031276557!3d16.97300741465793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea72c592cae733%3A0x7d42dec11dbade32!2sPhansop%2C%20Maharashtra%20415612!5e0!3m2!1sen!2sin!4v1699121397393!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/PHANSOP/PHANSOP.dwg  ",
                },
                "Kasop": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15265.529616673548!2d73.2972002127617!3d16.95573021677751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea72bd1b04f673%3A0xea23af62dce1f76f!2sKasop%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121425800!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KASOP/KASOP.dwg ",
                },
                "Wayangani": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15350.161963437367!2d73.60779526253309!3d15.880730395162338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff86603d3c211%3A0x7d388856c8359c5!2sWayangani%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699121450672!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/WAYANGANI/WAYANGANI.dwg ",
                },
                "Golap": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7635.434338527265!2d73.31045339503775!3d16.889879951733562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea722e38027d07%3A0xb878be15e9de471c!2sGolap%2C%20Maharashtra%20415616!5e0!3m2!1sen!2sin!4v1699121483016!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/GOLAP/GOLAP.dwg  ",
                },
                "Ranpar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15269.637688439865!2d73.27170106936411!3d16.9050846591195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea726e6040a605%3A0x85ebca684a358f54!2sRanpar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121516120!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/RANPAR/RANPAR.dwg   ",
                },
                "Musalmanwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.929928656146!2d73.29653217593479!3d17.027106813082554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea72d3042c9e21%3A0x1ba1b73742c3bc8a!2sMusalmanwadi%2C%20Maharashtra%20415612!5e0!3m2!1sen!2sin!4v1699121547704!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/MUSALMANWADI/MUSALMANWADI.dwg  ",
                },
                "Pavas": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15272.241293362973!2d73.3148145127434!3d16.87291022691324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea717f306149eb%3A0xba3630c3f2ba7a2a!2sPawas%2C%20Maharashtra%20415616!5e0!3m2!1sen!2sin!4v1699121571800!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/PAVAS/PAVAS.dwg ",
                },
                "Ganespule": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.928669686054!2d73.01054477597228!3d19.50170443846887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a0a341534c31%3A0x15f053ee7fb4543e!2sGaneshpuri%2C%20Maharashtra%20401206!5e0!3m2!1sen!2sin!4v1699121621944!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/GANAPATIPULE/GANPATIPULE.dwg ",
                },
                "Thikan Soman": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7636.514060809864!2d73.2945451450363!3d16.863175153274994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea71ed499172ff%3A0x6f36bd20df4d041c!2sThikan%20Soman%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121683704!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/THIKAN SOMAN/THIKAN SOMAN.dwg ",
                },
                "Kurdhe": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15273.989776116316!2d73.28708111926694!3d16.851269617558202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea71bdd109b39f%3A0xc2076a51d1997754!2sKurdhe%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121711240!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/KURDHE/KURDHE.dwg ",
                },
                "Mervi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15273.989776116316!2d73.28708111926694!3d16.851269617558202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea71b0cbdeb439%3A0x12f121ef6465aa0f!2sMervi%2C%20Maharashtra%20415616!5e0!3m2!1sen!2sin!4v1699121754080!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/MERAVI/MERAVI.dwg  ",
                },
                "Purnagad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15274.856267176514!2d73.29607016273626!3d16.840535230864315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7184f66c02bd%3A0xddcf31053fa43292!2sPurnagad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121778856!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/PURANGAD/PURNGAD.dwg ",
                },
                "Peth Purnagad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7637.719792191399!2d73.31823014503462!3d16.833305154996623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea71aaa1500cdb%3A0x984e8a7eb2d289f9!2sPeth%20Purnagad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121833144!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/PETH PURANAGAD/PETH PURNAGAD.dwg ",
                },
                "Bhandarwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15277.231595461242!2d73.29147596919452!3d16.81107472385143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7042d8f22ca9%3A0xc95a3b88435da13e!2sBhandarwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121861992!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/BHANDARWADI/BHANDARWADI.dwg PURNAGAD.dwg ",
                },
                "Gaonkhadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30558.055861228906!2d73.30254056596544!3d16.78876196254148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7a7fe7bcdb53%3A0xedc1b1146d25e81e!2sGaonkhadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699121914977!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RATNAGIRI/GAONKHADI/GAONKHADI.dwg   ",
                },
            },
            //taluka5
            "Rajapur": {
                "Varachiwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822874.4102771784!2d74.14683919696769!3d16.650258233162592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1b559a609bdef%3A0x9ecd5d0faa7b2a9f!2sVarchiwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699311671136!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/VARCHI WADI (KAISAVALLI)/VARCHI WADI ( KAISAVALI).dwg   ",
                },
                "Avali Chiwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7641.144358405803!2d73.3024031257363!3d16.748185095286548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7afb2b9a0167%3A0x727e5a87760b664d!2sAvali%20Chiwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699122135295!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/AVLICHI WADI/AVLICHI WADI.dwg  ",
                },
                "Kasheli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30566.335159134793!2d73.30193976592008!3d16.73723227644978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7b0727256ec7%3A0x2d91c902e530401f!2sKasheli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699122252719!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/KASHELI/KASHELI.dwg ",
                },
                "Wadavetye": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30566.335159134793!2d73.30193976592008!3d16.73723227644978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7b9d33d46811%3A0x461a4c340b3fe436!2sWadavetye%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699122304759!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/WADA VATYE/WADA VATYE.dwg  ",
                },
                "Wadativare": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15287.037509151301!2d73.32252031270313!3d16.688920249284582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7c7a359513d3%3A0xd3e64793e73ed885!2sWadativare%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699122383350!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/WADATIVRE/WADATIVRE.dwg ",
                },
                "Nate": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.780430972986!2d73.35789358564088!3d16.63778528305536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7d6c6edbc7c9%3A0x5cb0af3f896a90cb!2sNate%20Ratnagiri%20Maharashtra!5e0!3m2!1sen!2sin!4v1699122439143!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/NATE/NATE.dwg   ",
                },
                "Ambolgad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15290.766746874824!2d73.32077976269301!3d16.642235704928922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7daebffe3daf%3A0xd8b12fc20af65d5d!2sAmbolgad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699122494287!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/AMBOLGAD/AMBOLGAD.dwg   ",
                },
                "Yashvantgad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.0868208822694!2d73.3793484856392!3d16.62241128351388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7e1047e08c73%3A0x8b7f20ad85c5864d!2sYeshwantgad!5e0!3m2!1sen!2sin!4v1699122551887!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/YASHVANTGAD/YASHVANTGAD.dwg ",
                },
                "Anatwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7645.517006027479!2d73.34679307568773!3d16.63888505248492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7dc50ed62b01%3A0xc2134f5b64ab2801!2sAnantwadi%2C%20Maharashtra%20415806!5e0!3m2!1sen!2sin!4v1699122602791!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/ANANTWADI/ANANTWADI.dwg  ",
                },
                "Bhandarwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15277.231595461277!2d73.29147596919452!3d16.81107472385143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7042d8f22ca9%3A0xc95a3b88435da13e!2sBhandarwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699311855190!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/BANDHWADI/BANDHWADI.dwg ",
                },
                "Holi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21626.28459511087!2d73.35781775056435!3d16.625608683161666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7de9d3dacabd%3A0x241aa7214b79fc1d!2sHoli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699311926287!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/HOLI/HOLI.dwg  ",
                },
                "Kuvesh": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.4326322096863!2d73.35580098563727!3d16.605042584031263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea878ecac1b37f%3A0x1f9493ec8a176023!2sKuveshi%2C%20ratnagiri!5e0!3m2!1sen!2sin!4v1699122790318!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/KUVESHI/KUVESHI.dwg   ",
                },
                "Mithgavane": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.628068105758!2d73.3645963450213!3d16.585865819152858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea874abc0b9e39%3A0x684cf24c20f757df!2sMithgavane%2C%20Maharashtra%20416702!5e0!3m2!1sen!2sin!4v1699122846614!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/MITHGAVNE/MITHGAVNE.dwg  ",
                },
                "Varilwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15294.641876340012!2d73.312990968806!3d16.593589607758446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea877a7e0a4ec3%3A0x182b132b91b56e6e!2sVarilwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699122991406!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/VARCHI WADI (KAISAVALLI)/VARCHI WADI ( KAISAVALI).dwg  ",
                },
                "Madban": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.623964966619!2d73.34187507592898!3d16.59542512513503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea8767cb190ef3%3A0xff760e5c0e1c18a4!2sMadban%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699123052677!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/MADBAN/MADBAN.dwg ",
                },
                "Bakale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30589.687076910912!2d73.3471612157924!3d16.591054265741494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea8753563f0e31%3A0xf999613eae6e51b8!2sBakale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699123107365!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/BAKALE/BAKALE.dwg ",
                },
                "Dandewadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7648.406646981887!2d73.34724014502021!3d16.566270220265913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea87215816e089%3A0xef6d18f0089c9072!2sDandewadi%2C%20Maharashtra%20416702!5e0!3m2!1sen!2sin!4v1699123151717!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/DANDEWADI/DANDEWADI.dwg ",
                },
                "Shirse(Sagave)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7648.860179984706!2d73.36072519501955!3d16.554845120914432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea86d3e8e383af%3A0x9e290d7517a39011!2sSagave%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699123196622!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Ratnagiri/RAJAPUR/SHIRSE/SHIRSE.dwg  ",
                },
            },
        },

        //District6
        "Sindhudurg": {
            //taluka1
            "Devgad": {
                "Vijaydurg": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7648.8629835747615!2d73.33009474501954!3d16.554774470918417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea86e3356bd8c7%3A0x9438c2015cc70be1!2sVijaydurg%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699011559174!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/VIJAYDURG/VIJAYDURG.dwg",
                },
                "Rameshwar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15298.748985654307!2d73.30938606871442!3d16.54187961578442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea86f6a89fe867%3A0x3b7099f7f02d2000!2sRameshwar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699011620102!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/RAMESHWAR/RAMESHWAR.dwg ",
                },
                "Girye": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30604.686226321857!2d73.31750721571058!3d16.49649899102884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea843bb448523b%3A0x9c5810bac94b5ab9!2sGirye%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699011690190!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/GIRYE/GIRYE.dwg",
                },
                "Hurshi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15303.408769313424!2d73.3418652626588!3d16.483020324081057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea8468db403cb1%3A0xdb20819dc6fc03f0!2sHurshi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699011777935!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/HURSHI/HURSHI.dwg ",
                },
                "Kalambai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.097193641597!2d73.69129016327705!3d19.106589939369577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd447d77231a4b%3A0xefddf9dc8afef11d!2sKalambai%2C%20Maharashtra%20410509!5e0!3m2!1sen!2sin!4v1699011848413!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/KALAMBAI/KALAMBAI.dwg ",
                },
                "Phanase": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15306.638030388429!2d73.35101026265006!3d16.442110278977758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea84a37b33ce9d%3A0x3a4aca2fcb5dd8ee!2sPhanase%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699011922838!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/PHANASHI/PHANASHI.dwg",
                },
                "Padvane": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15307.730698667621!2d73.36494531264711!3d16.428245330635047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea8354f4c800f7%3A0xfdc5d879ce378224!2sPadvane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012014389!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/PADVANE/PADAVANE.dwg ",
                },
                "Devgad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15311.764047619996!2d73.37764166263622!3d16.376967036754444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9c791e0277d9%3A0x181ba0a6cdbe2166!2sDevgad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012089726!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/DEVGAD/DEWGAD.dwg",
                },
                "Jamsande": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30620.73021814631!2d73.37556536562319!3d16.39477021812172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9ced0d64d95f%3A0x3ab34a95d56e2327!2sJamsande%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012154326!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/JAMSANDE/JAMSANDE.dwg",
                },
                "Mithmumbari": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7656.8054248807775!2d73.38303394500888!3d16.35343538228006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9c13f92fc0fd%3A0xec84b094bcc349f6!2sMithmumbari%20Beach!5e0!3m2!1sen!2sin!4v1699012255525!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/MITHMUMBARI/MITHMUMBRI.dwg",
                },
                "Kunkeshwar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7657.58291974681!2d73.38900444500779!3d16.333596383392862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9ea0293f173b%3A0x2a624b9c4f11a2c0!2sKunkeshwar%2C%20Maharashtra%20416612!5e0!3m2!1sen!2sin!4v1699012306668!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/KUNKESHWAR/KUNKESHWAR.dwg ",
                },
                "Kathwaneshwar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15314.959106543876!2d73.39178026262759!3d16.336235291604066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9e9d8c6d7403%3A0xdffd50cedada4113!2sKatwaneshwar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012370910!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/KATEWANESHWR/KATWANESHWAR.dwg",
                },
                "Katvan": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7658.134012395833!2d73.39392009500709!3d16.31952018418165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9e96a108bb7d%3A0xaf8a67c4615be7c3!2sKatvan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012513614!5m2!1sen!2sin",
                    "dwgURL": " ./dwg/Sindhudurg/DEVGAD/KATVAN/KATWAN.dwg",
                },
                "Mithbaon": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7659.146666364849!2d73.42950589500576!3d16.293623785631375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9fb34cb0f279%3A0xff11151452612ad6!2sMithbav%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012645158!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/MITHBAV/MITHBAV.dwg ",
                },
                "Tambaldeg": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7658.7424614886995!2d73.39610514500627!3d16.30396523505262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9eef3855bdb3%3A0x22f146e773ea7a4a!2sTambaldeg%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012714925!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/TAMBALDEG/TAMBALDEG.dwg ",
                },
                "Hindale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.8105552784064!2d73.42928057592488!3d16.281477133719328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9fba9af958d1%3A0xce3ff2a2f048e0d!2sHindale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012802934!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/HINDALE/HINDALE.dwg",
                },
                "Morve": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15121.060693796231!2d73.42878879017522!3d18.65209291462384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be802c11a69c7a9%3A0xd0f2bf43397bd546!2sMorve%2C%20Maharashtra%20412108!5e0!3m2!1sen!2sin!4v1699012944885!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/MORVE/MORVE.dwg ",
                },
                "Munage": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30647.313543419234!2d73.41768246547879!3d16.22485046311424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa04088b33bb7%3A0x187b47339355ec0f!2sMunage%2C%20Aadbandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699013017366!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/MUNGE/MUNGE.dwg ",
                },
                "Aadbandar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30646.110110625315!2d73.41961041548532!3d16.23258016107463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa03dea180ee9%3A0x8df82433c66a6c35!2sAadbandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699013113918!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/DEVGAD/AADBANDAR/AADBANDAR.dwg",
                },
            },
            //taluka2
            "Malwan": {
                "Gaudwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7662.676974898566!2d73.44051939500103!3d16.203029040686687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa05c47b5775b%3A0x6ce6bb400632b881!2sGaudwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699013188590!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/GAUDWADI/GAUDWADI.dwg",
                },
                "jamdul": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.6635757247327!2d73.43926908881747!3d16.203612421786783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa059e69a8ff9%3A0x9e25fd9c2bacc1ca!2sJamdul%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699013440646!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/JAMDUL/JAMDUL.dwg ",
                },
                "Pirawadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7662.81487515527!2d73.42934019500078!3d16.199480240884157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa0f6610da5ef%3A0xc10a7e0a3b75226f!2sPirawadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699013557781!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/PIRAWADI/PIRAWADI.dwg",
                },
                "Hirlewadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15326.765592496804!2d73.42746691809008!3d16.18485707082083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa09a05414cab%3A0x1ee669b2dcc3d80d!2sHirlewadi%2C%20Achara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699013652502!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/HIRLEWADI/HIRLEWADI.dwg ",
                },
                "Wayangani": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15350.161963437367!2d73.60779526253309!3d15.880730395162338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff86603d3c211%3A0x7d388856c8359c5!2sWayangani%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699013730286!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/WAIGANI/WAIGANI.dwg",
                },
                "Tondavali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15311.05244532352!2d73.69752031263815!3d16.386025385674593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc03ba2376f6249%3A0xa0ef388a468b2078!2sTondavali%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699013800166!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/TONDAVALI/TONDAVALI.dwg",
                },
                "Juva Pankhol": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30663.905762190054!2d73.43962031538895!3d16.11791024126273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa77eb8fc6d1b%3A0x6b523e4e4e45b6d5!2sJuva%20Pankhol%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699013941710!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/JUVA PANKHOL/JUVA PANKHOL.dwg ",
                },
                "Hadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15329.634479803788!2d73.44441106802624!3d16.147864776485534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa7581e321caf%3A0x9fd75cde61136d92!2sHadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699014160902!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/HADI M/HADI M.dwg ",
                },
                "Shemadranewadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7665.865465968135!2d73.46034514499668!3d16.120780245254423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc01d875e85ca45%3A0x59a301964fe09140!2sShemadranewadi%2C%20Maharashtra%20416606!5e0!3m2!1sen!2sin!4v1699014226062!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/SHEMADRANEWADI/SHEMADRANEWADI.dwg",
                },
                "Ozar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15332.648238347194!2d73.46014026257998!3d16.10891541848741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc01d7ea8cc3bf1%3A0xf513d731ca9d649f!2sOzar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699014520126!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/OZAR/OZAR.dwg",
                },
                "Revandi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15333.571210202474!2d73.4614777625775!3d16.09696871989171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc01d66a8a97149%3A0xf80102829259ffba!2sRevandi%2C%20Kolamb%2C%20Malvan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699014600550!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/REVANDI/REVANDI.dwg",
                },
                "Kolamb": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7667.365274958531!2d73.46228214499475!3d16.08195029740361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa7f7d0fe7b29%3A0xab1849bb4efa7f39!2sKolamb%2C%20Maharashtra%20416606!5e0!3m2!1sen!2sin!4v1699014695054!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/KOLAMB/KOLAMB.dwg  ",
                },
                "Sarjekot": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7667.263227306211!2d73.45769014499481!3d16.08459519725742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beaa7f67aebfa43%3A0x48b3ac67dd6a76af!2sSarjekot%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699015025765!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/SARJEKOT/SARJEKOT.dwg ",
                },
                "Nhive": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30666.694986215418!2d73.46316546537386!3d16.099865245999688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc01d6c3daac955%3A0x2264967f4a5b958!2sNhive%2C%20Maharashtra%20416606!5e0!3m2!1sen!2sin!4v1699015086077!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/NHIVE/NHIVE.dwg ",
                },
                //DWG Not
                "Malwan(MCI)": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245289.09980222202!2d73.25366935565395!3d16.135800358184714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc01c04f2a16849%3A0x51261b71b6d29a36!2sMalwan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699015226030!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Kumbharmath": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15336.554454898207!2d73.47436526256949!3d16.058295224431827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc002b9df2a7bdb%3A0xba141ffe34c34ef9!2sKumbharmath%2C%20Maharashtra%20416606!5e0!3m2!1sen!2sin!4v1699015292470!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/KUMBHARMATH/KUMBHARMATH.dwg",
                },
                "Wayari": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15337.482162495757!2d73.47680026256704!3d16.04625032584404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0029569849303%3A0x97a1bcb878ad3072!2sWayari%2C%20Maharashtra%20416606!5e0!3m2!1sen!2sin!4v1699015354925!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/WAIYARI/WAIYARI.dwg ",
                },
                "Kalethar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7669.667976900421!2d73.48539999499165!3d16.02215520070438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0025fb479e2a1%3A0xa5501b533776c3ba!2sKalethar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699015417438!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/KALETHAR/KALETHAR.dwg ",
                },
                "Devli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15339.072756131403!2d73.4851452125628!3d16.025578328265674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00258ba92c67b%3A0x75d01b94d5d1bb43!2sDevli%2C%20Maharashtra%20416606!5e0!3m2!1sen!2sin!4v1699015477677!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/DEVLI M/DEVLI M.dwg ",
                },
                "Tarkali": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.5657345786267!2d73.48287452592159!3d16.036106290322294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc002927ea82d55%3A0x32632722fbb1ccc1!2sTarkarli%2C%20Maharashtra%20416606!5e0!3m2!1sen!2sin!4v1699015547029!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/MALWAN/TARKARLI/TARKARLI.dwg",
                },
            },
            //taluka3
            "Vengurla": {
                "Karli": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15342.048049502835!2d73.54519031255481!3d15.986840332796802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc003fe5bd887dd%3A0xf23736958dea463d!2sKarli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699070836294!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/KARLI/KARLI.dwg ",
                },
                "Bhogave": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15343.766665093583!2d73.50841106255017!3d15.9644224354149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00173fd8b2627%3A0x92135ba9aaf81f19!2sBhogwe%2C%20Gavan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699070893118!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/BHOGAVE/BHOGAVE.dwg",
                },
                "Shelapi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7672.126608466962!2d73.52760524498834!3d15.95807020422969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00114e184c8db%3A0x2b355610d8d1921f!2sShelapi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699070960191!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/SHELPI/SHELPI.dwg",
                },
                "Shriramwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15345.761025004686!2d73.54579441254488!3d15.938369188453745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc000d584610315%3A0xc7ba1196aaa75317!2sShriramwadi%2C%20Maharashtra%20416522!5e0!3m2!1sen!2sin!4v1699071020109!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/SHRIRAMWADI/SHRIRAMWADI.dwg",
                },
                "Kochre": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.119509566536!2d73.54560382592054!3d15.955134192480703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0013752b165cd%3A0x419924e6692818c7!2sKochare%2C%20Shriramwadi%2C%20Maharashtra%20416522!5e0!3m2!1sen!2sin!4v1699071088014!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/KOCHARE/KOCHARE.dwg ",
                },
                "Medha": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7672.7225071503635!2d73.54907312538569!3d15.942500147545882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0012b2faff613%3A0xa6cbc60c45cb2e8d!2sMedha%2C%20Maharashtra%20416522!5e0!3m2!1sen!2sin!4v1699071166924!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/MEDHA/MEDHA.dwg",
                },
                "Mayana": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7673.1278630443!2d73.55197524498709!3d15.931900255665537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc000d372b92177%3A0xe8c1a02b8218c815!2sMayana%2C%20Maharashtra%20416522!5e0!3m2!1sen!2sin!4v1699071224630!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/MAYANA/MAYANA.dwg ",
                },
                "Khavene": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.823019681255!2d73.5648830759201!3d15.918340143458082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00746eabe3a6f%3A0x65616e5c82efec68!2sKhavane%20Beach!5e0!3m2!1sen!2sin!4v1699071296405!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/KHAVANE/KHAVANE.dwg ",
                },
                "Malai": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.8183999677667!2d73.38881669851135!3d16.392453959172258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea9c8d815becf5%3A0xa2003741c1c343e9!2sMalai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699071486875!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/MALAI/MALAI.dwg ",
                },
                "Kelus": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7674.244685242034!2d73.58849014498556!3d15.902660207267553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00764a3558c43%3A0x10700e7863c55db5!2sKelus%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699071543294!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/KELUS/KELUS.dwg",
                },
                "Kalavi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7674.831702679639!2d73.59834009498479!3d15.887270208109683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff8864b20309d%3A0x648ba0f71f57b4d0!2sKalavi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699071639502!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/KALAVI/KALAVI.dwg",
                },
                "Telekarwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7534.00421116503!2d73.96523004517833!3d19.23874000769623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd1625ee45399d%3A0xe5914c604087a75!2sTikekarwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699071811922!5m2!1sen!2sin",
                    "dwgURL": "../dwg/Sindhudurg/VENGURLA/TALEKARWADI/TALEKAREADI.dwg ",
                },
                "Wayangani": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15350.161963437367!2d73.60779526253309!3d15.880730395162338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff86603d3c211%3A0x7d388856c8359c5!2sWayangani%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699071962427!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/WAYANGANI/WAYANGANI.dwg",
                },
                "Dabholi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15350.385511028886!2d73.5922362175646!3d15.8777971676256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff86127f3ac5b%3A0x50af3e825943739c!2sDabholi%2C%20Wayangani%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072034950!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/DABHOLI/DABHOLI.dwg ",
                },
                //DWG Not               
                "Vengurla": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30705.77414761497!2d73.61924506516304!3d15.84493741252467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff832be370491%3A0x1e8a56293dcd4721!2sVengurla%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072135710!5m2!1sen!2sin",
                    // "dwgURL": " ", 
                },
                "Navabag": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4762.93405825062!2d73.63241512591914!3d15.838975195559266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9c691c5741f%3A0xf1f943ff2f061448!2sNavabag%2C%20Maharashtra%20416516!5e1!3m2!1sen!2sin!4v1699072243709!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/NAVABAG/NAVABAG V.dwg",
                },
                "Ubhadanda": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.23901660011!2d73.6368240855552!3d15.844030206259658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9cfe251c89d%3A0x2ceae7c64c6ab1c5!2sUbhadanda%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072340341!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/UBHADANDA/UBHADANDA V.dwg",
                },
                "Parabwada": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7676.02233949777!2d73.64277514498313!3d15.856010259817863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff82b592a2399%3A0xe94b6fc355ef97f6!2sParabwada%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072432213!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/PARABHWADA/PARABHWADA.dwg ",
                },
                "Vagheshwar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2277045502037!2d73.63218497591915!3d15.844625195410035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9c8c33f6de1%3A0xb2eb61665e9d84d9!2sVagheshwar%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072494933!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/VAGESHWAR/VAGESHWAR.dwg",
                },
                "Namas": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7676.118412601447!2d73.625590144983!3d15.853485259955786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9caad7157f9%3A0xbc3f5c5f1aac204b!2sNamas%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072553997!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/NAMAS/NAMAS.dwg ",
                },
                "Siddhawadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7676.717457980549!2d73.63617019498223!3d15.837732260815315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9c47d902557%3A0x61696edeebe60462!2sSiddhawadi%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072626317!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/SIDHHARTHWADI/SIDHHARTHWADI.dwg  ",
                },
                "Adari": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7676.262591298631!2d73.63891514498292!3d15.849695210162578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9d230004bd9%3A0xa53c8d5e64fe7d8d!2sAdari%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072710549!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/ADARI/ADARI.dwg",
                },
                "Kamblewadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.1447600300708!2d73.74725487592448!3d16.264349634183358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc015fd1aa8339d%3A0x4d25405f802874bf!2sKamblewadi%20Rd%2C%20Harkul%20Bk.%2C%20Maharashtra%20416602!5e0!3m2!1sen!2sin!4v1699072831189!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/KAMBALEWADI/KAMBALIWDI.dwg ",
                },
                "Sukhatanbag": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.962234055297!2d73.65547502591862!3d15.805945246430896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff0abeaa97d27%3A0xde92499503572cb!2sSukhatanbag%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072900349!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/SUKTANBAG/SUKTANBAG.dwg ",
                },
                "Varachemad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7677.065218097793!2d73.63737519498187!3d15.828580261314338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9e62e091dcb%3A0x47bfae6748f315c5!2sVarachemad%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699072956997!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/VARCHEMAD.dwg ",
                },
                "Kurlewadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.648070875924!2d73.64392502591895!3d15.822500195994197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9e4938824b9%3A0xb61fa13d6832eb72!2sKurlewadi%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699073024261!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/KURLEWADI/KURLEWADI.dwg",
                },
                "Girapwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15355.40956291499!2d73.63693021251909!3d15.811735403166512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9f8d10870bd%3A0xb0f17edcb1023367!2sGirapwadi%2C%20Maharashtra%20416516!5e0!3m2!1sen!2sin!4v1699073080205!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/GIRAPWADI/GIRAPWADI.dwg",
                },
                "Muth": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7677.432446597792!2d73.63405519498122!3d15.818910311841375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff9f035cc85b7%3A0x16e4aa5123e40884!2sMuth%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699073144013!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/MUTH/MUTH.dwg ",
                },
                "Mochemad": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.0796591412623!2d73.64949307591857!3d15.799753146594092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbffa07b615d213%3A0xa03b3c2e0a275ac9!2sMochemad%20Beach!5e0!3m2!1sen!2sin!4v1699073227892!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/MOCHEMAD/MOCHEMAD.dwg ",
                },
                "Tank": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15356.466724157835!2d73.64851026251627!3d15.797800404779641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff0a60df1890f%3A0x9bae749fb19983f8!2sTank%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699073283997!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/TANK/TANK.dwg ",
                },
                "Sakhelekhol": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7678.313551773151!2d73.66330519498008!3d15.795685313105936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff0bba0c3f75b%3A0x83ed7846aad48290!2sSakhelekhol%2C%20Maharashtra%20416518!5e0!3m2!1sen!2sin!4v1699073543229!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/SAKHALKHOLE/SAKHALKHOLE.dwg  ",
                },
                "Temb": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.320130410411!2d73.66472002591851!3d15.787065146928352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff097c6bbc463%3A0xd5c63e687c84cfc0!2sTemb%2C%20Maharashtra%20416518!5e0!3m2!1sen!2sin!4v1699073613180!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/TEMB/TEMB.dwg ",
                },
                "Sagartirtha": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.3762969422796!2d73.65712507591853!3d15.784100197006307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff0992d82ce27%3A0x800220f7d2cdfa9c!2sSagartirtha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699073779341!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/SAGARTIRTHA/SAGARTIRTHA.dwg ",
                },
                "Velgar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.497311900634!2d73.6794700259183!3d15.777710147174673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff0f20913435b%3A0x2309eb646a86598b!2sVelagar%2C%20Maharashtra%20416518!5e0!3m2!1sen!2sin!4v1699073856075!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/VELAGHAR/VELAGHAR.dwg ",
                },
                "Bagayat": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.579096187033!2d73.67545012591833!3d15.773390197288274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff0f33876f7a9%3A0x2cd32566ef9f97a6!2sBagayat%2C%20Maharashtra%20416518!5e0!3m2!1sen!2sin!4v1699073925004!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/BAGAYAT.dwg  ",
                },
                "Khalchikar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7679.878400321397!2d73.6592101449781!3d15.754355315352168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff07aa4667ee1%3A0x1760db9115796f5a!2sKhalchikar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699074000749!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/KHALACHIKAR/KHALACHIKAR.dwg  ",
                },
                "Varachikar": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7680.430047662306!2d73.65713519497726!3d15.739760266144216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff00cfe60de9b%3A0xb18105cb5ca34850!2sVarachiker%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699074065453!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/VARCHIKAR.dwg  ",
                },
                "Sukhalbhat": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7679.465521686376!2d73.67175514497863!3d15.765270314759432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff06009190fe9%3A0xc0f42f378d5dccf0!2sSukhalbhat%2C%20Maharashtra%20416518!5e0!3m2!1sen!2sin!4v1699074122468!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/SUKHALBHER.dwg ",
                },
                "Mhartale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15359.819941164293!2d73.6686203125073!3d15.753520409897877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff042ea0d6ae5%3A0x50c7bfe442dd880d!2sMhartale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699074176420!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/MHARTALE/MHARTALE.dwg ",
                },
                "Redi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15360.822708209755!2d73.66663446250463!3d15.740255061428908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff015fe461b1b%3A0x7e335d7f470e7805!2sRedi%2C%20Kanyale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699074231780!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/REDI/REDI.dwg ",
                },
                "Bombadoji Chiwadi": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7680.06649766917!2d73.6655300949777!3d15.749380265622221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff06eb02624ed%3A0x174dccce5ca5fec0!2sBombadojichiwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699074302620!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/BOMBADOJICHIWADI/BOMBADOJI CHIWADI.dwg",
                },
                "Kanyale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15361.119222498059!2d73.66923021250385!3d15.736330461881659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff03db704b97f%3A0x69441ae054048aaf!2sKanyale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699074375044!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/KANYALE/kanyale.dwg ",
                },
                "Gavatale": {
                    "mapURL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15361.113564272351!2d73.68987026250385!3d15.736405361873013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff032d6d906b5%3A0x2b93fd7def0c81fc!2sGavatale%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699074434363!5m2!1sen!2sin",
                    "dwgURL": "./dwg/Sindhudurg/VENGURLA/GAVTALE/GAVTALE.dwg",
                },
            },
        },

    };
    const districtSelect = document.getElementById("district");
    const talukaSelect = document.getElementById("taluka");
    const villageSelect = document.getElementById("village");
    const mapDiv = document.getElementById('map');

    // Populate the district dropdown
    for (let district in data) {
        const option = document.createElement("option");
        option.value = district;
        option.text = district;
        districtSelect.add(option);
    }

    // Function to populate the taluka dropdown based on the selected district
    function populateTalukaDropdown(selectedDistrict) {
        talukaSelect.innerHTML = '<option value="" disabled selected>Select Taluka</option>'; // Reset Taluka dropdown
        if (selectedDistrict in data) {
            for (let taluka in data[selectedDistrict]) {
                const option = document.createElement("option");
                option.value = taluka;
                option.text = taluka;
                talukaSelect.add(option);
            }
        }
    }

    // Function to populate the village dropdown based on the selected district and taluka
    function populateVillageDropdown(selectedDistrict, selectedTaluka) {
        villageSelect.innerHTML = '<option value="" disabled selected>Select Village</option>'; // Reset Village dropdown
        if (selectedDistrict in data && selectedTaluka in data[selectedDistrict]) {
            const villages = data[selectedDistrict][selectedTaluka];
            for (let village in villages) {
                const option = document.createElement("option");
                option.value = village;
                option.text = village;
                villageSelect.add(option);
            }
        }
    }

    // Initial population of the taluka and village dropdowns
    districtSelect.addEventListener("change", () => {
        const selectedDistrict = districtSelect.value;
        populateTalukaDropdown(selectedDistrict);
        populateVillageDropdown(selectedDistrict, talukaSelect.value);
    });

    talukaSelect.addEventListener("change", () => {
        const selectedDistrict = districtSelect.value;
        const selectedTaluka = talukaSelect.value;
        populateVillageDropdown(selectedDistrict, selectedTaluka);
    });

    // Handle the click event for displaying map and DWG


    // Rest of your code for displaying map and DWG based on the selections...
    document.getElementById('villageSelector').addEventListener('click', function (event) {
        event.preventDefault();

        const selectedDistrict = districtSelect.value;
        const selectedTaluka = talukaSelect.value;
        const selectedVillage = villageSelect.value;

        if (selectedDistrict && selectedTaluka && selectedVillage) {
            const villageData = data[selectedDistrict][selectedTaluka][selectedVillage];

            if (villageData) {
                const mapURL = villageData.mapURL;
                if (mapURL) {
                    // Display the map in the 'map' div
                    var mapDiv = document.getElementById('map');
                    mapDiv.innerHTML = '<iframe src="' + mapURL + '" width=" 600px" height="715"></iframe>';
                } else {
                    // Handle the case where the map URL for the selected village is not defined
                    var mapDiv = document.getElementById('map');
                    mapDiv.innerHTML = "Map not available for this village.";
                }

                const dwgURL = villageData.dwgURL;
                if (dwgURL) {
                    // Display the DWG file as a link in the 'dwg' div
                    var dwgDiv = document.getElementById('dwg');
                    dwgDiv.innerHTML = '<a href=" ' + dwgURL + ' " download> Download DWG </a>';
                } else {
                    // Handle the case where the DWG URL for the selected village is not defined
                    var dwgDiv = document.getElementById('dwg');
                    dwgDiv.innerHTML = "DWG file not available for this village.";
                }
            }
        } else {
            // Handle the case where one or more values are missing
            var mapDiv = document.getElementById('map');
            mapDiv.innerHTML = "Please select a district, taluka, and village.";
            var dwgDiv = document.getElementById('dwg');
            dwgDiv.innerHTML = "";
        }
    });
});


// ECW IMAGE AND LINK

document.addEventListener("DOMContentLoaded", function () {
    const data1 = {
//Palghar        
        "Palghar": {
            "TOPOPLAN": {
                "Palghar": "./TopoPlan/Palghar/PALGHAR TOPOPLAN.dwg",
                "Palghar TOPOPLAN": "./TopoPlan/Palghar/PALGHAR_TOPOPLAN.dwg",
            },
            "ecwLink": {
                "Dahanu_ECW": "./ECW/Palghar/ECW/Dhanu.gmw",
                "Palghar_ECW": "./ECW/Palghar/ECW/Palghar.gmw",
                "Talasari_ECW": "./ECW/Palghar/ECW/Talasari.gmw",
                "Vasai_ECW": "./ECW/Palghar/ECW/Vasai.gmw",
            },
            "ecwPdf": {
                "Dahanu_Pdf": "./ECW/Palghar/PDF/Dhanu.pdf",
                "Palghar_Pdf": "./ECW/Palghar/PDF/Palghar.pdf",
                "Talasari_Pdf": "./ECW/Palghar/PDF/Talasari.pdf",
                "Vasai_Pdf": "./ECW/Palghar/PDF/Vasai.pdf",
            },
            "CRZPdf": {
                "CRZ-1": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-1.pdf",
                "CRZ-2": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-2.pdf",
                "CRZ-3": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-3.pdf",
                "CRZ-4": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-4.pdf",
                "CRZ-5": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-5.pdf",
                "CRZ-6": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-6.pdf",
                "CRZ-7": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-7.pdf",
                "CRZ-8": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-8.pdf",
                "CRZ-9": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-9.pdf",
                "CRZ-10": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-10.pdf",
                "CRZ-11": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-11.pdf",
                "CRZ-12": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-12.pdf",
                "CRZ-13": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-13.pdf",
                "CRZ-14": "./CRZ/CRZ-Pdf/PALGHAR/CRZ-14.pdf"
            },
            "CRZLink": {
                "CRZ-1": "./CRZ/CRZ-Link/PALGHAR/CRZ-1.dwg",
                "CRZ-2": " ./CRZ/CRZ-Link/PALGHAR/CRZ-2.dwg",
                "CRZ-3": " ./CRZ/CRZ-Link/PALGHAR/CRZ-3.dwg",
                "CRZ-4": " ./CRZ/CRZ-Link/PALGHAR/CRZ-4.dwg",
                "CRZ-5": " ./CRZ/CRZ-Link/PALGHAR/CRZ-5.dwg",
                "CRZ-6": "./CRZ/CRZ-Link/PALGHAR/CRZ-6.dwg",
                "CRZ-7": " ./CRZ/CRZ-Link/PALGHAR/CRZ-7.dwg",
                "CRZ-8": "./CRZ/CRZ-Link/PALGHAR/CRZ-8.dwg",
                "CRZ-9": " ./CRZ/CRZ-Link/PALGHAR/CRZ-9.dwg",
                "CRZ-10": "./CRZ/CRZ-Link/PALGHAR/CRZ-10.dwg",
                "CRZ-11": " ./CRZ/CRZ-Link/PALGHAR/CRZ-11.dwg",
                "CRZ-12": " ./CRZ/CRZ-Link/PALGHAR/CRZ-12.dwg",
                "CRZ-13": " ./CRZ/CRZ-Link/PALGHAR/CRZ-13.dwg",
                "CRZ-14": " ./CRZ/CRZ-Link/PALGHAR/CRZ-14.dwg",
            },
            "CONTOUR": {
                "Dahanu_Contour": "./CONTOUR/PALGHAR/DHANU(1M INTERVAL)CONTOUR.dwg",
                "Palghar Contour": " ./CONTOUR/PALGHAR/PALGHAR 1M INTERVAL.DWG", 
                "Vasai_Contour": " ./CONTOUR/PALGHAR/VASAI(1M INTERVAL)CONTOUR.dwg",  
            },
            "DGPS": {
                "Palghar_KMZ_File": "./DGPS/PALGHAR/PALGHAR  DGPS.kmz",
                "Palghar_DGPS_CSV": " ./DGPS/PALGHAR/PALGHAR DGPS.csv",
                "Palghar_GCP_Report": " ./DGPS/PALGHAR/PALGHAR GCP REPORT.pdf",  
            },

            "DEM": {
                "Palghar_DEM": "./DEM/PALGHAR/PALGHAR.dem ",
                "Dahanu_DEM": "./DEM/PALGHAR/DAHANU.dem ",
                "Talasari_DEM": "./DEM/PALGHAR/TALASARI DEM.dem ",
                "Vasai_DEM": " ./DEM/PALGHAR/VASAI.dem",  
            },
        },

//Thane
        "Thane": {
            "ecwLink": {
                // "ECW1": " ",
                // "ECW2": " ",
            },
            "ecwPdf": {
                // "PDF-1": "./Ecw Pdf/Palghar/pdf3_compressed.pdf",
                // "PDF-2": "./Ecw Pdf/Palghar/pdf4_compressed.pdf",
                // "PDF-3": "./Ecw Pdf/Palghar/pdf1_compressed.pdf",
                // "PDF-4": "./Ecw Pdf/Palghar/pdf2_compressed.pdf",
            },
            "CRZPdf": {
                "CRZ-1": "./CRZ/CRZ-Pdf/THANE/4.pdf",
                "CRZ-2": "./CRZ/CRZ-Pdf/THANE/5.pdf",
                "CRZ-3": "./CRZ/CRZ-Pdf/THANE/6.pdf",
                "CRZ-4": "./CRZ/CRZ-Pdf/THANE/7.pdf",
                "CRZ-5": "./CRZ/CRZ-Pdf/THANE/8.pdf",
                "CRZ-6": "./CRZ/CRZ-Pdf/THANE/9.pdf",
                "CRZ-7": "./CRZ/CRZ-Pdf/THANE/10.pdf",
                "CRZ-8": "./CRZ/CRZ-Pdf/THANE/11.pdf",
                "CRZ-9": "./CRZ/CRZ-Pdf/THANE/12.pdf",
                "CRZ-10": "./CRZ/CRZ-Pdf/THANE/76.pdf",
            },
            "CRZLink": {
            //    "CRZ-1": "./CRZ/CRZ-Link/THANE/CRZ-1.dwg",
            //    "CRZ-2": "./CRZ/CRZ-Link/THANE/CRZ-2.dwg",
            //    "CRZ-3": "./CRZ/CRZ-Link/THANE/CRZ-3.dwg",
            //    "CRZ-4": "./CRZ/CRZ-Link/THANE/CRZ-4.dwg",
            //    "CRZ-5": "./CRZ/CRZ-Link/THANE/CRZ-5.dwg",
            //    "CRZ-6": "./CRZ/CRZ-Link/THANE/CRZ-6.dwg",
            //    "CRZ-7": "./CRZ/CRZ-Link/THANE/CRZ-7.dwg",
            //    "CRZ-8": "./CRZ/CRZ-Link/THANE/CRZ-8.dwg",
            //    "CRZ-9": "./CRZ/CRZ-Link/THANE/CRZ-9.dwg",
            //    "CRZ-10": "./CRZ/CRZ-Link/THANE/CRZ-10.dwg",
            },
        },

//Mumbai        
        "Mumbai City & Suburban": {
            "ecwLink": {
                // "ECW1": " ",
                // "ECW2": " ",
            },
            "ecwPdf": {
                // "PDF-1": "./Ecw Pdf/Palghar/pdf5_compressed.pdf",
                // "PDF-2": "./Ecw Pdf/Palghar/pdf6_compressed.pdf",
                // "PDF-3": "./Ecw Pdf/Palghar/pdf1_compressed.pdf",
                // "PDF-4": "./Ecw Pdf/Palghar/pdf2_compressed.pdf",
            },
            "CRZPdf": {
                "CRZ-(City-1)": "./CRZ/CRZ-Pdf/MUMBAI CITY & SUBURBAN/City/1.pdf",
                "CRZ-(City-2)": "./CRZ/CRZ-Pdf/MUMBAI CITY & SUBURBAN/City/2.pdf",
                "CRZ-(City-3)": "./CRZ/CRZ-Pdf/MUMBAI CITY & SUBURBAN/City/3.pdf",
                "CRZ-(City-4)": "./CRZ/CRZ-Pdf/MUMBAI CITY & SUBURBAN/City/4.pdf",
                "CRZ-(Suburban-1)": "./CRZ/CRZ-Pdf/MUMBAI CITY & SUBURBAN/Suburban/1.pdf",
                "CRZ-(Suburban-2)": "./CRZ/CRZ-Pdf/MUMBAI CITY & SUBURBAN/Suburban/2.pdf",
            },
            "CRZLink": {
                // "CRZ-1(City-1)": "./CRZ/CRZ-Link/MUMBAI CITY & SUBURBAN/CRZ-1.dwg",
                // "CRZ-1(City-1)": "./CRZ/CRZ-Link/MUMBAI CITY & SUBURBAN/CRZ-1.dwg",
                // "CRZ-1(City-1)": "./CRZ/CRZ-Link/MUMBAI CITY & SUBURBAN/CRZ-1.dwg",
                // "CRZ-1(City-1)": "./CRZ/CRZ-Link/MUMBAI CITY & SUBURBAN/CRZ-1.dwg",
                // "CRZ-(Suburban-1)": "./CRZ/CRZ-Link/MUMBAI CITY & SUBURBAN/CRZ-1.dwg",
                // "CRZ-(Suburban-2)": "./CRZ/CRZ-Link/MUMBAI CITY & SUBURBAN/CRZ-1.dwg",
            },
        },

//Raigad        
        "Raigad": {
            "TOPOPLAN": {
                "Raigad" : "./Topoplan/Raigad/RAIGAD TOPOPLAN.dwg",
                "Raigad TOPOPLAN" : "./TopoPlan/RAIGAD/RAIGAD TOPOPLAN.dwg",
            },
            "ecwLink": {
                "Alibag_ECW": "./ECW/Raigad/ECW/ALIBAG.gmw",
                "Mhasala_ECW":"./ECW/Raigad/ECW/MHASALA.gmw",
                "Murud_ECW":"./ECW/Raigad/ECW/MURUD.gmw",
                "Panvel_ECW":"./ECW/Raigad/ECW/PANVEL.gmw",
                "Pen_ECW":"./ECW/Raigad/ECW/PEN.gmw",
                "Shrivrdhan_ECW":"./ECW/Raigad/ECW/SHRIVRDHAN.gmw",
                "Tala_ECW":"./ECW/Raigad/ECW/TALA.gmw",
                "Uran_ECW":"./ECW/Raigad/ECW/URAN.gmw",
            },
            "ecwPdf": {
                "Alibag_Pdf": "./ECW/Raigad/PDF/ALIBAG.pdf",
                "Mhasala_Pdf":"./ECW/Raigad/PDF/MHASALA.pdf",
                "Murud_Pdf":"./ECW/Raigad/PDF/MURUD.pdf",
                "Panvel_Pdf":"./ECW/Raigad/PDF/PANVEL.pdf",
                "Pen_Pdf":"./ECW/Raigad/PDF/PEN.pdf",
                "Shrivardhan_Pdf":"./ECW/Raigad/PDF/SHRIVRDHAN.pdf",
                "Tala_Pdf":"./ECW/Raigad/PDF/TALA.pdf",
                "Uran_Pdf":"./ECW/Raigad/PDF/URAN.pdf",
            },
            "CRZPdf": {
                "CRZ-1": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-1.pdf",
                "CRZ-2": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-2.pdf",
                "CRZ-3": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-3.pdf",
                "CRZ-4": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-4.pdf",
                "CRZ-5": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-5.pdf",
                "CRZ-6": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-6.pdf",
                "CRZ-7": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-7.pdf",
                "CRZ-8": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-8.pdf",
                "CRZ-9": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-9.pdf",
                "CRZ-10": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-10.pdf",
                "CRZ-11": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-11.pdf",
                "CRZ-12": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-12.pdf",
                "CRZ-13": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-13.pdf",
                "CRZ-14": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-14.pdf",
                "CRZ-15": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-15.pdf",
                "CRZ-16": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-16.pdf",
                "CRZ-17": "./CRZ/CRZ-Pdf/RAIGAD/CRZ-17.pdf",
            
            },
            "CRZLink": {
                "CRZ-1": "./CRZ/CRZ-Link/RAIGAD/CRZ-1.dwg",
                "CRZ-2": "./CRZ/CRZ-Link/RAIGAD/CRZ-2.dwg",
                "CRZ-3": "./CRZ/CRZ-Link/RAIGAD/CRZ-3.dwg",
                "CRZ-4": "./CRZ/CRZ-Link/RAIGAD/CRZ-4.dwg",
                "CRZ-5": "./CRZ/CRZ-Link/RAIGAD/CRZ-5.dwg",
                "CRZ-6": "./CRZ/CRZ-Link/RAIGAD/CRZ-6.dwg",
                "CRZ-7": "./CRZ/CRZ-Link/RAIGAD/CRZ-7.dwg",
                "CRZ-8": "./CRZ/CRZ-Link/RAIGAD/CRZ-8.dwg",
                "CRZ-9": "./CRZ/CRZ-Link/RAIGAD/CRZ-9.dwg",
                "CRZ-10": "./CRZ/CRZ-Link/RAIGAD/CRZ-10.dwg",
                "CRZ-11": "./CRZ/CRZ-Link/RAIGAD/CRZ-11.dwg",
                "CRZ-12": "./CRZ/CRZ-Link/RAIGAD/CRZ-12.dwg",
                "CRZ-13": "./CRZ/CRZ-Link/RAIGAD/CRZ-13.dwg",
                "CRZ-14": "./CRZ/CRZ-Link/RAIGAD/CRZ-14.dwg",
                "CRZ-15": "./CRZ/CRZ-Link/RAIGAD/CRZ-15.dwg",
                "CRZ-16": "./CRZ/CRZ-Link/RAIGAD/CRZ-16.dwg",
                "CRZ-17": "./CRZ/CRZ-Link/RAIGAD/CRZ-17.dwg",
           
            },
            "CONTOUR": {
                // "Alibag_Contour": "./CONTOUR/RAIGAD/Alibag(1M INTERVAL)CONTOUR.dwg",
                "Mhasala_Contour": "./CONTOUR/RAIGAD/MHASALA 20X20 ELEVATION.dwg",
                // "Murud_Contour": "./CONTOUR/RAIGAD/Murud(1M INTERVAL)CONTOUR.dwg",
                "Panvel_Contour": "./CONTOUR/RAIGAD/PANVEL 20X20 ELEVATION.DWG",
                "Pen_Contour": "./CONTOUR/RAIGAD/PEN 20X20 ELEVATION.dwg",
                // "Shrivardhan_Contour": "./CONTOUR/RAIGAD/Shrivardhan(1M INTERVAL)CONTOUR.dwg",
                // "Tala_Contour": "./CONTOUR/RAIGAD/Tala(1M INTERVAL)CONTOUR.dwg",
                // "Uran_Contour": "./CONTOUR/RAIGAD/Uran(1M INTERVAL)CONTOUR.dwg",
           
            },
            "DGPS": {
                "Raigad_KMZ_File": "./DGPS/RAIGAD/RAIGAD DGPS.kmz",
                "Raigad_DGPS_CSV": " ./DGPS/RAIGAD/RAIGAD DGPS.csv",
            },

            "DEM": {
                "Alibag_DEM": "./DEM/RAIGAD/ALIBAG.dem",
                "Mhasala_DEM": "./DEM/RAIGAD/MHASALA.dem",
                "Murud_DEM": "./DEM/RAIGAD/MURUD.dem ",
                "Panvel_DEM": "./DEM/RAIGAD/PANVEL.dem",  
                "Pen_DEM": "./DEM/RAIGAD/PEN.dem",
                "Shrivardhan_DEM": "./DEM/RAIGAD/SHRIVADHAN.dem",
                "Tala_DEM": "./DEM/RAIGAD/TALA.dem",
                "Uran_DEM": "./DEM/RAIGAD/URAN.dem",  
            },     
        },

//Rtanagiri
        "Ratnagiri": {
            "TOPOPLAN": {
                "Ratnagiri" : "./Topoplan/Ratnagiri/RATNAGIRI TOPOPLAN.dwg",
                "Ratnagiri TOPOPLAN" : "./TopoPlan/RATNAGIRI/RATNAGIRI TOPOPLAN.dwg",
            },
            

            "ecwLink": {
                "Dapoli_ECW": "./ECW/Ratnagiri/ECW/DAPOLI.gmw",
                "Guhaghar_ECW": "./ECW/Ratnagiri/ECW/GUHAGHAR.gmw",
                "Mandangad_ECW": "./ECW/Ratnagiri/ECW/MANDANGAD.gmw",
                "Rajapur_ECW": "./ECW/Ratnagiri/ECW/RAJAPUR.gmw",
                "Ratnagiri_ECW": "./ECW/Ratnagiri/ECW/RATNAGIRI.gmw",

               
            },
            "ecwPdf": {
                "Dapoli_Pdf": "./ECW/Ratnagiri/PDF/DAPOLI.pdf",
                "Guhaghar_Pdf": "./ECW/Ratnagiri/PDF/GUHAGHAR.pdf",
                "Mandangad_Pdf": "./ECW/Ratnagiri/PDF/MANDANGAD.pdf",
                "Rajapur_Pdf": "./ECW/Ratnagiri/PDF/RAJAPUR.pdf",
                "Ratnagiri_Pdf": "./ECW/Ratnagiri/PDF/RATNAGIRI.pdf",
            },
            "CRZPdf": {
              
                "CRZ-1": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-1.pdf",
                "CRZ-2": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-2.pdf",
                "CRZ-3": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-3.pdf",
                "CRZ-4": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-4.pdf",
                "CRZ-5": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-5.pdf",
                "CRZ-6": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-6.pdf",
                "CRZ-7": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-7.pdf",
                "CRZ-8": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-8.pdf",
                "CRZ-9": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-9.pdf",
                "CRZ-10": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-10.pdf",
                "CRZ-11": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-11.pdf",
                "CRZ-12": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-12.pdf",
                "CRZ-13": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-13.pdf",
                "CRZ-14": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-14.pdf",
                "CRZ-15": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-15.pdf",
                "CRZ-16": "./CRZ/CRZ-Pdf/RATNAGIRI/CRZ-16.pdf",       
            },
            "CRZLink": {
                 "CRZ-1": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-1.dwg",
                 "CRZ-2": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-2.dwg",
                 "CRZ-3": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-3.dwg",
                 "CRZ-4": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-4.dwg",
                 "CRZ-5": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-5.dwg",
                 "CRZ-6": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-6.dwg",
                 "CRZ-7": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-7.dwg",
                 "CRZ-8": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-8.dwg",
                 "CRZ-9": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-9.dwg",
                 "CRZ-10": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-10.dwg",
                 "CRZ-11": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-11.dwg",
                 "CRZ-12": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-12.dwg",
                 "CRZ-13": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-13.dwg",
                 "CRZ-14": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-14.dwg",
                 "CRZ-15": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-15.dwg",
                 "CRZ-16": "./CRZ/CRZ-Link/RATNAGIRI/CRZ-16.dwg",
            },
            "CONTOUR": {
                "Dapoli_Contour": "./CONTOUR/RATNAGIRI/DAPOLI 1M INTERVAL CONTOUR.DWG",
                "Guhaghar_Contour": "./CONTOUR/RATNAGIRI/GUHAGHAR 1M INTERVAL CONTOUR.DWG",
                "Mandangad_Contour": "./CONTOUR/RATNAGIRI/MANDANGAD 1M INTERVAL CONTOUR.DWG",
                "Rajapur_Contour": "./CONTOUR/RATNAGIRI/RAJAPUR 1M INTERVAL CONTOUR.DWG",
                "Ratnagiri_Contour": "./CONTOUR/RATNAGIRI/RATNAGIRI 1M INTERVAL CONTOUR.DWG",    
           
            },
            "DGPS": {
                "Ratnagiri_KMZ_File": "./DGPS/RATNAGIRI/RATNAGIRI DGPS.kmz",
                "Ratnagiri_DGPS_CSV": "./DGPS/RATNAGIRI/RATNAGIRI DGPS.csv",
           
            },

            "DEM": {
                "Dapoli_DEM": "./DEM/RATNAGIRI/DAPOLI.dem",
                "Ghuhaghar_DEM": "./DEM/RATNAGIRI/GUHAGHAR.dem",
                "Mandangad_DEM": "./DEM/RATNAGIRI/MANDANGAD DEM.dem",   
                // "Rajapur_DEM": "./DEM/RATNAGIRI/",
                // "Ratnagiri_DEM": "./DEM/RATNAGIRI/",        
            },      
        },

//Sindhudurg
        "Sindhudurg": {
            "TOPOPLAN": {
             "Sindhudurg" : "./TopoPlan/SINDHUDURG/SINDHUDURG TOPOPLAN.dwg",
             "Sindhudurg TOPOPLAN" : "./TopoPlan/SINDHUDURG/SINDHUDURG TOPOPLAN.dwg",
              
             },
            "ecwLink": {
                "Devgad_ECW": "./ECW/Sindhudurg/ECW/DEVGAD.gmw",
                "Malvan_ECW":"./ECW/Sindhudurg/ECW/MALVAN.gmw",
                "Vengurla_ECW":"./ECW/Sindhudurg/ECW/VENGURLA.gmw",
                
            },
            "ecwPdf": {
                "Devgad_Pdf": "./ECW/Sindhudurg/PDF/DEVGAD.pdf",
                "Malvan_Pdf":"./ECW/Sindhudurg/PDF/MALVAN.pdf",
                "Vengurla_Pdf":"./ECW/Sindhudurg/PDF/VENGURLA.pdf",
                
            },
            "CRZPdf": {
                "CRZ-1": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-1.pdf",
                "CRZ-2": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-2.pdf",
                "CRZ-3": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-3.pdf",
                "CRZ-4": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-4.pdf",
                "CRZ-5": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-5.pdf",
                "CRZ-6": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-6.pdf",
                "CRZ-7": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-7.pdf",
                "CRZ-8": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-8.pdf",
                "CRZ-9": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-9.pdf",
                "CRZ-10": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-10.pdf",
                "CRZ-11": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-11.pdf",
                "CRZ-12": "./CRZ/CRZ-Pdf/SINDHUDURG/CRZ-12.pdf",
                
            },
            "CRZLink": {
                "CRZ-1": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-1.dwg",
                "CRZ-2": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-2.dwg",
                "CRZ-3": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-3.dwg",
                "CRZ-4": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-4.dwg",
                "CRZ-5": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-5.dwg",
                "CRZ-6": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-6.dwg",
                "CRZ-7": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-7.dwg",
                "CRZ-8": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-8.dwg",
                "CRZ-9": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-9.dwg",
                "CRZ-10": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-10.dwg",
                "CRZ-11": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-11.dwg",
                "CRZ-12": "./CRZ/CRZ-Link/SINDHUDURG/CRZ-12.dwg",
               
            },
            "CONTOUR": {
                "Devgad_Contour": "./CONTOUR/SINDHUDURG/DEVGAD 1M INTERVAL CONTOUR.DWG",
                "Malvan_Contour": "./CONTOUR/SINDHUDURG/MALVAN 1M INTERVAL CONTOUR.DWG",
                "Vengurla_Contour": "./CONTOUR/SINDHUDURG/VENGURLA 1M INTERVAL CONTOUR.DWG",
             
           
            },
            "DGPS": {
                "Sindhudurg_KMZ_File": "./DGPS/SINDHUDURG/SINDHUDURG DGPS.kmz",
                "Sindhudurg_DGPS_CSV": "./DGPS/SINDHUDURG/sindhudurg dgps.csv",
           
            },

            "DEM": {
                "Devgad_DEM": "./DEM/SINDHUDURG/DEVGAD.dem",
                "Malvan_DEM": "./DEM/SINDHUDURG/MALVAN.dem",
                "Vengurla_DEM": "./DEM/SINDHUDURG/VENGURLA.dem",         
            },           
        },
    };

    const districtSelect1 = document.getElementById("ecwDistrict");
    const categoriesSelect = document.getElementById("categories");
    const ecwOptionSelect = document.getElementById("ecwOption");
    const ecwPdfDiv = document.getElementById('pdfDiv');
    const ecwDiv = document.getElementById('ecw');
    const crzDiv = document.getElementById('pdfDiv')
    const crzLinkDiv = document.getElementById('ecw');
    const TOPOPLANDiv = document.getElementById('ecw');
    const CONTOURDiv = document.getElementById('ecw');
    const DGPSDiv = document.getElementById('ecw');
    const DEMDiv = document.getElementById('ecw');

    // Populate district dropdown
    for (let district1 in data1) {
        const option = document.createElement("option");
        option.value = district1;
        option.text = district1;
        districtSelect1.add(option);
    }

    // Create a new PDF dropdown
    const ecwPdfOptionSelect = document.createElement("select");
    ecwPdfOptionSelect.id = "ecwPdfOption";
    ecwPdfOptionSelect.innerHTML = '<option value="" disabled selected>Select PDF</option>';
    ecwPdfOptionSelect.style.display = "none";

    // Append the PDF dropdown to the form
    const ecwSelectorForm = document.getElementById("ecwSelector");
    ecwSelectorForm.appendChild(ecwPdfOptionSelect);

    // Event listener for category change
    categoriesSelect.addEventListener("change", () => {
        const selectedCategory = categoriesSelect.value;

        ecwOptionSelect.style.display = "none"; // Hide the third dropdown by default
        ecwOptionSelect.innerHTML = ""; // Clear existing options

        if (selectedCategory !== "") {
            const options = data1[districtSelect1.value][selectedCategory];

            for (let option in options) {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.text = option;
                ecwOptionSelect.add(optionElement);
            }

            if (options) {
                ecwOptionSelect.style.display = "block"; // Show the third dropdown
            }
        }
    });

    // Event listener for the third dropdown
    ecwOptionSelect.addEventListener("change", () => {
        const selectedDistrict1 = districtSelect1.value;
        const selectedCategory = categoriesSelect.value;
        const selectedOption = ecwOptionSelect.value;

        if (selectedDistrict1 && selectedCategory && selectedOption) {
            const ecwData = data1[selectedDistrict1][selectedCategory][selectedOption];

            if (ecwData) {
                if (selectedCategory === "ecwPdf") {
                    const ecwPdfUrl = ecwData;

                    if (ecwPdfUrl) {
                        // Display the PDF in the 'pdfDiv' using an iframe
                        ecwPdfDiv.innerHTML = `<iframe src="${ecwPdfUrl}" style="width:100%; height:100%;"></iframe>`;
                        ecwDiv.innerHTML = ""; // Clear the ecw div
                    } else {
                        // Handle the case where the PDF URL is not defined
                        ecwPdfDiv.innerHTML = "PDF not available for this village.";
                    }
                } else if (selectedCategory === "ecwLink") {
                    const ecwUrl = ecwData;

                    if (ecwUrl) {
                        // Display the link in the 'ecw' div
                        ecwDiv.innerHTML = `<a href="${ecwUrl}" download>Download ECW</a>`;
                        ecwPdfDiv.innerHTML = ""; // Clear the ecwPdfDiv
                    } else {
                        // Handle the case where the ECW URL is not defined
                        ecwDiv.innerHTML = "ECW file not available for this village.";
                        ecwPdfDiv.innerHTML = "";
                    }
                }
  //crz              
                else if (selectedCategory === "CRZPdf") {
                    const CRZUrl = ecwData;

                    if (CRZUrl) {
                        // Display the PDF in the 'pdfDiv' using an iframe
                        crzDiv.innerHTML = `<iframe src="${CRZUrl}" style="width:100%; height:100%;"></iframe>`;
                        ecwDiv.innerHTML = ""; // Clear the ecw div
                    } else {
                        // Handle the case where the PDF URL is not defined
                        crzDiv.innerHTML = "PDF not available for this village.";
                    }
                }
                else if (selectedCategory === "CRZLink") {
                    const CRZLinkUrl = ecwData;

                    if (CRZLinkUrl) {
                        // Display the link in the 'ecw' div
                        crzLinkDiv.innerHTML = `<a href="${CRZLinkUrl}" download>Download CRZ Link</a>`;
                        ecwPdfDiv.innerHTML = ""; // Clear the ecwPdfDiv
                    } else {
                        // Handle the case where the ECW URL is not defined
                        crzLinkDiv.innerHTML = "ECW file not available for this village.";
                        ecwPdfDiv.innerHTML = "";
                    }
                }
//topoplan
                else if (selectedCategory === "TOPOPLAN") {
                    const TOPOPLANUrl = ecwData;

                    if (TOPOPLANUrl) {
                        // Display the link in the 'ecw' div
                        TOPOPLANDiv.innerHTML = `<a href="${TOPOPLANUrl}" download> Download TOPOPLAN</a>`;
                        ecwPdfDiv.innerHTML = ""; // Clear the ecwPdfDiv
                    } else {
                        // Handle the case where the ECW URL is not defined
                        TOPOPLANDiv.innerHTML = "ECW file not available for this village.";
                        ecwPdfDiv.innerHTML = "";
                    }
                }
// CONTOUR
                else if (selectedCategory === "CONTOUR") {
                    const CONTOURUrl = ecwData;

                    if (CONTOURUrl) {
                        // Display the link in the 'ecw' div
                        CONTOURDiv.innerHTML = `<a href="${CONTOURUrl}" download>Download CONTOUR</a>`;
                        ecwPdfDiv.innerHTML = ""; // Clear the ecwPdfDiv
                    } else {
                        // Handle the case where the ECW URL is not defined
                        CONTOURDiv.innerHTML = "ECW file not available for this village.";
                        ecwPdfDiv.innerHTML = "";
                    }
                }
//DGPS
                else if (selectedCategory === "DGPS") {
                    const DGPSUrl = ecwData;

                    if (DGPSUrl) {
                        // Display the link in the 'ecw' div
                        DGPSDiv.innerHTML = `<a href="${DGPSUrl}" download> Download DGPS</a>`;
                        ecwPdfDiv.innerHTML = ""; // Clear the ecwPdfDiv
                    } else {
                        // Handle the case where the ECW URL is not defined
                        DGPSDiv.innerHTML = "ECW file not available for this village.";
                        ecwPdfDiv.innerHTML = "";
                    }
                }
//DEM
                else if (selectedCategory === "DEM") {
                    const DEMUrl = ecwData;

                    if (DEMUrl) {
                        // Display the link in the 'ecw' div
                        DEMDiv.innerHTML = `<a href="${DEMUrl}" download> Download DEM</a>`;
                        ecwPdfDiv.innerHTML = ""; // Clear the ecwPdfDiv
                    } else {
                        // Handle the case where the ECW URL is not defined
                        DEMDiv.innerHTML = "ECW file not available for this village.";
                        ecwPdfDiv.innerHTML = "";
                    }
                }
            }
        } else {
            // Handle the case where one or more values are missing
            ecwPdfDiv.innerHTML = "Please select a district, category, and option.";
            ecwDiv.innerHTML = "";
        }
    });
});