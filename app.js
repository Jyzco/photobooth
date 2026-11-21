(() => {
    "use strict";

    const STORAGE_THEME_KEY = "ekspedisi27_theme_v5";
    const STORAGE_QUIZ_KEY = "ekspedisi27_state_v5";
    const SESSION_HANDOFF_KEY = "ekspedisi27_handoff_dismissed";
    const FRAME_WIDTH = 960;
    const FRAME_HEIGHT = 720;
    const INTER_SHOT_PAUSE_MS = 650;

    const QUIZ_STEPS = [
        {
            id: "step-origin-fyp",
            type: "choice",
            eyebrow: "POS BASECAMP 01 // AWAL MULA",
            evidenceImg: "assets/moment-follback-aug19.jpg",
            evidenceCaption: "19 Agustus 2026: 32 menit setelah di-follow",
            question: "Masih inget pertama kali aku notice kamu di mana sebelum kita kenalan?",
            options: [
                {
                    label: "Pas aku jadi tim dokum FYP BINUS, lagi nge-video dan kamu tiba-tiba dadah ke kamera",
                    reaction: "100% bener. Gara-gara dadah ke kamera pas FYP itu aku jadi sering gak sengaja ketemu kamu selama Agustus, sampai akhirnya twibbon IS B30 kamu lewat di beranda tanggal 19 Agustus."
                },
                {
                    label: "Di rak toko buku Gramedia Jalma pas lagi jalan sore",
                    reaction: "Kalau Gramed Jalma itu babak tanggal 3 Oktober! Awal bangetnya tetap dari momen kamu dadah ke kameraku pas aku lagi tugas tim dokum FYP BINUS."
                },
                {
                    label: "Di satu kelas kuliah yang sama persis",
                    reaction: "Justru karena beda angkatan dan ketemunya pas bulan ospek FYP BINUS itu yang bikin awalnya terasa random banget."
                },
                {
                    label: "Pas sama-sama lagi mendaki Gunung Merbabu",
                    reaction: "Merbabu masih masuk daftar mimpi yang harus kita wujudin bareng nanti! Pertama kali notice jelas waktu kamu dadah ke kamera tim dokum FYP BINUS."
                }
            ]
        },
        {
            id: "step-deeptalk",
            type: "choice",
            eyebrow: "POS BASECAMP 02 // 17 SEPTEMBER",
            evidenceImg: "assets/chat-deeptalk.jpg",
            evidenceCaption: "17 September 2026, pukul 22.03 WIB",
            question: "Tanggal 17 September, habis kamu bilang typing-ku kayak Gen Alpha, kita dapet nilai 100 buat matkul apa?",
            options: [
                {
                    label: "Matkul Deeptalk (plus rumus: canggung + canggung = nerveous)",
                    reaction: "Tepat. Dari yang malam itu mikir kalau ketemu bakal kabur karena canggung, sekarang malah bisa ketawa bareng bahas hal-hal paling gak penting."
                },
                {
                    label: "Matkul Pengantar Ngoding jam 01.43 pagi",
                    reaction: "Itu IG Note tanggal 2 September waktu aku sok siap men-tutor! Tanggal 17 September puncaknya di Matkul Deeptalk nilai 100."
                },
                {
                    label: "Matkul Sejarah Kimpul dan Topografi Jogja-Klaten",
                    reaction: "Kuliah kimpul udah tamat sejak DM pertama 27 Agustus! Malam 17 September itu yang dapet nilai 100 adalah Matkul Deeptalk."
                },
                {
                    label: "Matkul Bahasa Inggris #SIAPJDIPENDAMPING",
                    reaction: "Kalau kurikulum English itu baru kita bahas bulan November di WhatsApp. Malam 17 September juaranya tetap Matkul Deeptalk."
                }
            ]
        },
        {
            id: "step-gramed-jalma",
            type: "choice",
            eyebrow: "POS BASECAMP 03 // 03 OKTOBER",
            evidenceImg: "assets/notes-jalma.jpg",
            evidenceCaption: "IG Notes 03 Oktober 2026 -> Gramed Jalma",
            question: "Tanggal 3 Oktober kita perdana jalan bareng ke Gramed Jalma lewat kode IG Notes 'jalma -> maw maw'. Inget gak apa yang terjadi malamnya habis pulang?",
            options: [
                {
                    label: "HP-ku malah ngelag pas mau foto candid kamu, terus malam itu juga kita resmi pindah chat ke WhatsApp",
                    reaction: "Bener 100%! Katanya tukang candid, giliran mau motoin malah HP-nya ngelag. Untung malam itu juga obrolannya lanjut pindah ke WhatsApp."
                },
                {
                    label: "Langsung janjian muncak ke Gunung Merbabu besok paginya",
                    reaction: "Wacana Merbabu memang udah muncul sejak 18 September, tapi malam 3 Oktober itu yang kejadian HP-ku ngelag pas mau candid lalu kita pindah ke WhatsApp."
                },
                {
                    label: "Buka obrolan akun second ber berry untuk pertama kalinya",
                    reaction: "Kalau pintu rahasia akun second baru kebuka tanggal 17 Oktober! Malam 3 Oktober itu momen HP ngelag plus pindah WhatsApp."
                },
                {
                    label: "Nonton bioskop The Park XXI kursi D9 dan D10",
                    reaction: "Bioskop The Park itu akhir Oktober! Tanggal 3 Oktober adalah perdana jalan ke Gramed Jalma plus HP ngelag pas mau candid."
                }
            ]
        },
        {
            id: "step-momen-kita",
            type: "choice",
            eyebrow: "POS BASECAMP 04 // ARSIP FAVORIT",
            evidenceImg: "assets/moment-spotify.jpg",
            evidenceCaption: "29 Oktober 2026: Spotify Blend 100%",
            question: "Dari semua momen acak kita dari Agustus sampai November, mana yang paling 'kita banget'?",
            options: [
                {
                    label: "Obrolan akun second ber berry x jiddan side. soal kontrak bidadari dan sang gila",
                    reaction: "Dari sinilah pintu rahasia akun second dibuka, sampai muncul pesan yang di-pin dan cerita impian konten fairy tale & morikei."
                },
                {
                    label: "Spotify Blend 100% cocok + nonton Laut Bercerita kursi D9 dan D10",
                    reaction: "Kombinasi lagu La La Lost You 100% cocok plus typo legendaris 'lau bercerita' sebelum berangkat bioskop."
                },
                {
                    label: "Discord SIPALING AMBIS KEJAR KARIR 5 jam 47 menit + nobar fantasi tengah malam",
                    reaction: "Nugas bareng paling niat sedunia, walau kadang ketiduran di kafe dan ujungnya lanjut nobar Fantastic Beasts tengah malam."
                },
                {
                    label: "Atedoz Library Theme + koleksi foto pegang kamera dan recreate 5 meme klasik",
                    reaction: "Sudah sempat foto bertema perpustakaan, tukeran kamera, sampai niat bikin ulang 5 meme sekaligus dalam semalam."
                }
            ]
        },
        {
            id: "step-kamus-typo",
            type: "choice",
            eyebrow: "POS BASECAMP 05 // KAMUS TYPO & LORE",
            evidenceImg: "assets/moment-meme-heart.jpg",
            evidenceCaption: "20 Nov 2026: totalitas recreate meme bareng",
            question: "Typo atau julukan legendaris mana nih yang selalu sukses bikin kita langsung ngakak setiap diingat?",
            options: [
                {
                    label: "\"Manual, di kos ku gaada mesin cucu\" -> \"cui, what this is cui\"",
                    reaction: "Juara tak terbantahkan menjelang Puncak 27. Sampai sekarang kata 'cui' tetap terdengar kayak kode rahasia."
                },
                {
                    label: "\"Call me rara not semprul\" + \"kaka noh kebo\"",
                    reaction: "Dua julukan saling serang paling ikonik sejak akun second ber berry x jiddan side. dibuka!"
                },
                {
                    label: "\"Pa mau nonton lau bercerita\" sebelum berangkat ke XXI",
                    reaction: "Typo paling sopan sejagat sebelum akhirnya kita benar-benar duduk di kursi D9 dan D10."
                },
                {
                    label: "\"Cabggung + canggung : nerveous\" di malam 17 September",
                    reaction: "Bukti sejarah kalau dulunya kita sempat sejujur itu ngaku gugup sebelum akrab kayak sekarang."
                }
            ]
        },
        {
            id: "step-bareng-terus",
            type: "runaway",
            eyebrow: "POS BASECAMP 06 // PERTANYAAN PENTING",
            evidenceImg: "assets/chat-merbabu.jpg",
            evidenceCaption: "18 September 2026: wacana explore alam",
            question: "Jujur deh, setelah kenal dari Agustus sampai sekarang... nyesel gak dulu dadah ke kamera pas FYP dan follback aku?",
            options: [
                {
                    label: "Sama sekali gak nyesel, malah seru banget",
                    reaction: "Sip! Catat baik-baik ya, berarti agenda muncak Merbabu, nonton lagi, dan nugas bareng masih lanjut terus."
                }
            ],
            runawayStages: [
                "Nyesel dikit sih...",
                "Eits, tombolnya kabur",
                "Tuh kan gak mau diklik",
                "Jangan gitu dong semprul",
                "Oke menyerah, berarti gak nyesel ya!"
            ],
            runawayFinalReaction: "Nah kan, bahkan tombolnya pun tahu kalau kenal sama kamu itu justru hal paling seru di semester ini."
        },
        {
            id: "step-rating-note",
            type: "rating",
            eyebrow: "POS BASECAMP 07 // NILAI & PESAN PRIBADI",
            question: "Nilai pertemanan kita sejauh ini (1 sampai 100) plus satu pesan kecil buat masuk ke Kartu Rangkuman Kenangan:"
        }
    ];

    const VIGNETTE_SVGS = {
        "camera-stars": '<svg viewBox="0 0 180 116" width="160" height="104" fill="none"><rect x="28" y="34" width="124" height="64" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.8"/><path d="M58 34L66 20H114L122 34" stroke="currentColor" stroke-width="1.8"/><circle cx="90" cy="66" r="21" fill="#F3D695" fill-opacity="0.24" stroke="currentColor" stroke-width="1.8"/><circle cx="90" cy="66" r="11" stroke="#835811" stroke-width="1.6"/><circle cx="136" cy="48" r="3.5" fill="#D8A84E"/><path d="M22 18L24.5 24L30 26.5L24.5 29L22 35L19.5 29L14 26.5L19.5 24Z" fill="#D8A84E"/><path d="M154 14L156 19L161 21L156 23L154 28L152 23L147 21L152 19Z" fill="#8F2631"/></svg>',
        "quill-arch": '<svg viewBox="0 0 180 116" width="160" height="104" fill="none"><path d="M40 100V52C40 26 62 12 90 12C118 12 140 26 140 52V100" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 4"/><rect x="52" y="54" width="60" height="38" rx="5" fill="#F3D695" fill-opacity="0.2" stroke="currentColor" stroke-width="1.6"/><path d="M52 58L82 78L112 58" stroke="currentColor" stroke-width="1.5"/><path d="M126 30C114 48 106 66 104 82C118 76 132 58 144 36C139 32 132 30 126 30Z" fill="currentColor" fill-opacity="0.16" stroke="#835811" stroke-width="1.7"/><circle cx="82" cy="78" r="4" fill="#8F2631"/></svg>',
        "mountain-sunrise": '<svg viewBox="0 0 180 116" width="160" height="104" fill="none"><circle cx="90" cy="48" r="22" fill="#F8C87A" fill-opacity="0.45" stroke="#D8A84E" stroke-width="1.4"/><path d="M16 96L54 44L84 74L114 34L164 96H16Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M114 34L124 52L112 58L104 49L98 56L114 34Z" fill="#FFFDF8" fill-opacity="0.65"/><path d="M56 16V8M90 10V4M124 16V8" stroke="#D8A84E" stroke-width="1.6" stroke-linecap="round"/></svg>',
        "lantern-oak": '<svg viewBox="0 0 180 116" width="160" height="104" fill="none"><path d="M18 22C64 18 106 24 156 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M62 20C54 10 42 12 38 22C48 26 56 26 62 20Z" fill="currentColor" fill-opacity="0.22"/><line x1="94" y1="20" x2="94" y2="42" stroke="#835811" stroke-width="1.6"/><circle cx="94" cy="68" r="28" fill="#F8C87A" fill-opacity="0.32"/><path d="M80 42H108L114 64L104 88H84L74 64L80 42Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8"/><circle cx="94" cy="65" r="7" fill="#D8A84E"/><circle cx="42" cy="72" r="2.5" fill="#D8A84E"/><circle cx="144" cy="54" r="3" fill="#D8A84E"/></svg>',
        "teacup-stars": '<svg viewBox="0 0 180 116" width="160" height="104" fill="none"><path d="M52 54H118V76C118 90 106 98 85 98C64 98 52 90 52 76V54Z" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.8"/><path d="M118 60H128C135 60 138 66 138 71C138 77 134 82 127 82H118" stroke="currentColor" stroke-width="1.8"/><ellipse cx="85" cy="99" rx="44" ry="6" fill="#D8A84E" fill-opacity="0.24" stroke="currentColor" stroke-width="1.2"/><path d="M74 42C70 34 78 28 74 20M94 42C90 34 98 28 94 20" stroke="#835811" stroke-width="1.6" stroke-linecap="round"/><path d="M36 30L38 35L43 37L38 39L36 44L34 39L29 37L34 35Z" fill="#D8A84E"/></svg>',
        "moon-angel": '<svg viewBox="0 0 180 116" width="160" height="104" fill="none"><circle cx="90" cy="58" r="42" stroke="currentColor" stroke-opacity="0.24" stroke-width="1.4" stroke-dasharray="4 5"/><path d="M98 24C80 28 69 44 72 62C74 78 88 89 104 91C84 97 63 85 58 64C53 43 66 23 87 20C91 20 95 21 98 24Z" fill="#D8A84E" fill-opacity="0.34" stroke="currentColor" stroke-width="1.7"/><path d="M118 46L121 54L129 57L121 60L118 68L115 60L107 57L115 54Z" fill="#8F2631"/><circle cx="136" cy="40" r="3" fill="#D8A84E"/></svg>',
        "headset-waves": '<svg viewBox="0 0 180 116" width="160" height="104" fill="none"><path d="M54 74V56C54 36 70 22 90 22C110 22 126 36 126 56V74" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><rect x="44" y="64" width="16" height="30" rx="8" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.8"/><rect x="120" y="64" width="16" height="30" rx="8" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.8"/><path d="M70 76C76 68 82 84 90 74C98 64 104 82 110 74" stroke="#835811" stroke-width="1.8" stroke-linecap="round"/><circle cx="90" cy="46" r="4" fill="#D8A84E"/></svg>',
        "summit-crown": '<svg viewBox="0 0 180 116" width="160" height="104" fill="none"><path d="M22 96L58 46L82 72L90 34L104 72L126 48L158 96H22Z" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M90 12L94 21L103 25L94 29L90 38L86 29L77 25L86 21Z" fill="#D8A84E"/><circle cx="52" cy="26" r="2.5" fill="#8F2631"/><circle cx="128" cy="26" r="2.5" fill="#8F2631"/></svg>'
    };

    const REALM_SCENERY_SVGS = {
        1: `<div class="realm-scenery-top" aria-hidden="true">
                <svg viewBox="0 0 1200 190" preserveAspectRatio="none" width="100%" height="165" fill="none">
                    <path d="M0 32C110 88 220 56 320 20C205 2 105 12 0 32Z" fill="currentColor" fill-opacity="0.14"/>
                    <path d="M1200 32C1090 88 980 56 880 20C995 2 1095 12 1200 32Z" fill="currentColor" fill-opacity="0.14"/>
                    <circle cx="96" cy="56" r="4" fill="#D8A84E" fill-opacity="0.68"/>
                    <circle cx="1104" cy="56" r="4" fill="#D8A84E" fill-opacity="0.68"/>
                    <path d="M56 16C92 48 134 50 178 26" stroke="currentColor" stroke-opacity="0.34" stroke-width="1.6"/>
                    <path d="M1144 16C1108 48 1066 50 1022 26" stroke="currentColor" stroke-opacity="0.34" stroke-width="1.6"/>
                    <path d="M180 42L183 51L192 54L183 57L180 66L177 57L168 54L177 51Z" fill="#D8A84E" fill-opacity="0.58"/>
                    <path d="M1020 42L1023 51L1032 54L1023 57L1020 66L1017 57L1008 54L1017 51Z" fill="#D8A84E" fill-opacity="0.58"/>
                </svg>
            </div>
            <div class="realm-scenery-bottom" aria-hidden="true">
                <svg viewBox="0 0 1200 150" preserveAspectRatio="none" width="100%" height="130" fill="none">
                    <path d="M0 150V96L64 46L128 106L210 34L296 116L388 64L480 130H0ZM720 150L820 68L910 120L998 42L1086 102L1152 54L1200 94V150H720Z" fill="currentColor" fill-opacity="0.12"/>
                    <circle cx="152" cy="82" r="3" fill="#D8A84E" fill-opacity="0.66"/>
                    <circle cx="1048" cy="76" r="3" fill="#D8A84E" fill-opacity="0.66"/>
                </svg>
            </div>`,
        2: `<div class="realm-scenery-top" aria-hidden="true">
                <svg viewBox="0 0 1200 190" preserveAspectRatio="none" width="100%" height="165" fill="none">
                    <path d="M0 12C88 46 168 38 256 14" stroke="currentColor" stroke-opacity="0.36" stroke-width="1.8"/>
                    <line x1="128" y1="31" x2="128" y2="68" stroke="#D8A84E" stroke-opacity="0.72" stroke-width="1.6"/>
                    <circle cx="128" cy="84" r="24" fill="#F8C87A" fill-opacity="0.28"/>
                    <path d="M120 68H136L140 82L134 95H122L116 82L120 68Z" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.48" stroke-width="1.4"/>
                    <circle cx="128" cy="82" r="4.5" fill="#F8C87A" fill-opacity="0.88"/>
                    <path d="M1200 12C1112 46 1032 38 944 14" stroke="currentColor" stroke-opacity="0.36" stroke-width="1.8"/>
                    <line x1="1072" y1="31" x2="1072" y2="68" stroke="#D8A84E" stroke-opacity="0.72" stroke-width="1.6"/>
                    <circle cx="1072" cy="84" r="24" fill="#F8C87A" fill-opacity="0.28"/>
                    <path d="M1064 68H1080L1084 82L1078 95H1066L1060 82L1064 68Z" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.48" stroke-width="1.4"/>
                    <circle cx="1072" cy="82" r="4.5" fill="#F8C87A" fill-opacity="0.88"/>
                </svg>
            </div>
            <div class="realm-scenery-bottom" aria-hidden="true">
                <svg viewBox="0 0 1200 150" preserveAspectRatio="none" width="100%" height="130" fill="none">
                    <path d="M0 150C160 88 300 112 460 150H0ZM740 150C900 112 1040 88 1200 150H740Z" fill="currentColor" fill-opacity="0.12"/>
                    <circle cx="180" cy="74" r="3.5" fill="#F8C87A" fill-opacity="0.68"/>
                    <circle cx="240" cy="98" r="2.8" fill="#F8C87A" fill-opacity="0.62"/>
                    <circle cx="960" cy="94" r="2.8" fill="#F8C87A" fill-opacity="0.62"/>
                    <circle cx="1020" cy="70" r="3.5" fill="#F8C87A" fill-opacity="0.68"/>
                </svg>
            </div>`,
        3: `<div class="realm-scenery-top" aria-hidden="true">
                <svg viewBox="0 0 1200 190" preserveAspectRatio="none" width="100%" height="165" fill="none">
                    <path d="M92 34L95 43L104 46L95 49L92 58L89 49L80 46L89 43Z" fill="#D8A84E" fill-opacity="0.68"/>
                    <path d="M1108 34L1111 43L1120 46L1111 49L1108 58L1105 49L1096 46L1105 43Z" fill="#D8A84E" fill-opacity="0.68"/>
                    <path d="M168 62C154 66 146 80 149 94C152 106 162 114 174 115C158 119 143 109 140 94C137 78 147 62 162 60C164 60 166 61 168 62Z" fill="currentColor" fill-opacity="0.24"/>
                    <path d="M1044 62C1030 66 1022 80 1025 94C1028 106 1038 114 1050 115C1034 119 1019 109 1016 94C1013 78 1023 62 1038 60C1040 60 1042 61 1044 62Z" fill="currentColor" fill-opacity="0.24"/>
                    <polyline points="196,42 252,70 308,38" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.4" stroke-dasharray="4 5"/>
                    <polyline points="1004,42 948,70 892,38" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.4" stroke-dasharray="4 5"/>
                </svg>
            </div>
            <div class="realm-scenery-bottom" aria-hidden="true">
                <svg viewBox="0 0 1200 150" preserveAspectRatio="none" width="100%" height="130" fill="none">
                    <path d="M0 150V86C95 54 185 88 270 118C340 86 410 102 475 150H0ZM725 150C790 102 860 86 930 118C1015 88 1105 54 1200 86V150H725Z" fill="currentColor" fill-opacity="0.12"/>
                </svg>
            </div>`,
        4: `<div class="realm-scenery-top" aria-hidden="true">
                <svg viewBox="0 0 1200 190" preserveAspectRatio="none" width="100%" height="165" fill="none">
                    <circle cx="116" cy="76" r="46" stroke="currentColor" stroke-opacity="0.28" stroke-width="1.4" stroke-dasharray="5 5"/>
                    <circle cx="1084" cy="76" r="46" stroke="currentColor" stroke-opacity="0.28" stroke-width="1.4" stroke-dasharray="5 5"/>
                    <path d="M116 48L120 68L140 76L120 84L116 104L112 84L92 76L112 68Z" fill="#D8A84E" fill-opacity="0.52"/>
                    <path d="M1084 48L1088 68L1108 76L1088 84L1084 104L1080 84L1060 76L1080 68Z" fill="#D8A84E" fill-opacity="0.52"/>
                    <line x1="210" y1="28" x2="278" y2="56" stroke="#D8A84E" stroke-opacity="0.48" stroke-width="1.6" stroke-linecap="round"/>
                    <line x1="990" y1="28" x2="922" y2="56" stroke="#D8A84E" stroke-opacity="0.48" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="realm-scenery-bottom" aria-hidden="true">
                <svg viewBox="0 0 1200 150" preserveAspectRatio="none" width="100%" height="130" fill="none">
                    <path d="M0 150L110 42L218 106L326 26L448 150H0ZM752 150L874 26L982 106L1090 42L1200 150H752Z" fill="currentColor" fill-opacity="0.12"/>
                </svg>
            </div>`
    };

    const BIOME_META = {
        1: {
            kicker: "ZONA I // 100 - 650 MDPL // AGUSTUS - PERTENGAHAN SEPTEMBER",
            title: "Lembah Awal & Bisikan Senja",
            subtitle: "Dari kamera FYP BINUS, DM ulang tahun perdana, hingga janji awal menuju puncak gunung.",
            svg: '<svg viewBox="0 0 96 36" width="84" height="32" fill="none"><path d="M8 28C22 14 34 10 48 22C62 10 74 14 88 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M48 4L51 12L59 15L51 18L48 26L45 18L37 15L45 12L48 4Z" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.16"/></svg>'
        },
        2: {
            kicker: "ZONA II // 780 - 1.340 MDPL // AKHIR SEPTEMBER - PERTENGAHAN OKTOBER",
            title: "Hutan Lentera & Jalan Malam",
            subtitle: "Ketika stranger mulai jadi teman cerita, penuh kejutan prank, misteri pabrik permen, dan khodam tengah malam.",
            svg: '<svg viewBox="0 0 96 36" width="84" height="32" fill="none"><line x1="12" y1="18" x2="36" y2="18" stroke="currentColor" stroke-width="1.2"/><line x1="60" y1="18" x2="84" y2="18" stroke="currentColor" stroke-width="1.2"/><path d="M42 10H54L57 20L52 29H44L39 20L42 10Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.14"/><circle cx="48" cy="20" r="3" fill="currentColor"/></svg>'
        },
        3: {
            kicker: "ZONA III // 1.520 - 2.150 MDPL // 17 OKTOBER - 01 NOVEMBER",
            title: "Gerbang Bidadari & Langit Morikei",
            subtitle: "Pintu rahasia akun second terbuka, telepon lewat tengah malam, Spotify 100%, sampai impian dunia Ghibli dan morikei.",
            svg: '<svg viewBox="0 0 96 36" width="84" height="32" fill="none"><path d="M16 18H34M62 18H80" stroke="currentColor" stroke-width="1.2"/><path d="M52 7C46 9 43 15 44 21C45 26 50 29 55 29C48 31 41 27 40 20C39 13 44 7 50 6C51 6 51.5 6.4 52 7Z" fill="currentColor" fill-opacity="0.75"/><circle cx="58" cy="13" r="2" fill="currentColor"/></svg>'
        },
        4: {
            kicker: "ZONA IV // 2.260 - 2.700 MDPL // NOVEMBER HINGGA PUNCAK 27",
            title: "Puncak Bintang & Mahkota Awan",
            subtitle: "Foto perpustakaan, nobar fantasi di balik layar laptop, totalitas recreate meme, sampai typo paling legendaris sebelum puncak.",
            svg: '<svg viewBox="0 0 96 36" width="84" height="32" fill="none"><path d="M14 29L30 13L42 23L50 9L64 24L74 14L84 29H14Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="50" cy="5" r="2.2" fill="currentColor"/></svg>'
        }
    };

    const TRAIL_CHECKPOINTS = [
        {
            id: "pos-01",
            biome: 1,
            postNum: "01",
            altitude: "100 mdpl",
            date: "Agustus 2026",
            title: "Kamera FYP BINUS & Follback 19 Agustus",
            vignette: "camera-stars",
            pullQuote: "Satu dadah ke kamera tim dokum FYP bikin Agustus jadi gak biasa.",
            lines: [
                "Semua berawal pas aku lagi bertugas sebagai tim dokum FYP BINUS, lalu di tengah keramaian freshmen kamu tiba-tiba dadah ke arah kamera.",
                "Gara-gara momen random itu aku jadi sering gak sengaja notice kamu sepanjang bulan Agustus, sampai akhirnya twibbon IS B30 kamu muncul paling atas di beranda tanggal 19 Agustus dan dibalas follback 32 menit kemudian."
            ],
            photos: [
                {
                    src: "assets/moment-follback-aug19.jpg",
                    alt: "Notifikasi Instagram Rara mem-follow balik pada 19 Agustus 2026",
                    caption: "Notifikasi follback 19 Agustus beserta foto profil di Siwil Art",
                    contain: true
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 01 // Masih inget berapa menit jarak follback 19 Agustus?",
                options: [
                    { label: "32 menit tepat!", reply: "Betul! Tercatat resmi di arsip notifikasi Instagram." },
                    { label: "Seharian penuh?", reply: "Enggak selama itu, cuma 32 menit langsung di-follback balik!" }
                ]
            }
        },
        {
            id: "pos-02",
            biome: 1,
            postNum: "02",
            altitude: "190 mdpl",
            date: "27 Agu 2026",
            title: "DM Pertama di Hari Ultah, Siwil Art, & Kuliah Kimpul",
            vignette: "quill-arch",
            pullQuote: "\"Rara tetap 'Jogja' kok ketanemny di ingatanku, dengan taburan topping Semarang.\"",
            lines: [
                "Delapan hari setelah saling follow, obrolan pertama akhirnya kebuka tepat di hari ulang tahunmu tanggal 27 Agustus."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "27 Agu 2026",
                    prompt: "Inget gak momen pas chat pertama ini?",
                    messages: [
                        { from: "jay", text: "Happy Bday!", time: "10:21" },
                        { from: "rara", text: "thank uu kaa", time: "10:56" },
                        { from: "jay", text: "anyway, kita blm kenalan, mind if we get to know each other?", time: "19:05" },
                        { from: "rara", text: "oh yaa, bole", time: "19:07" },
                        { from: "jay", text: "NGL, aku notice kamu karena pp kamu yg lgi baca buku..", time: "19:23" },
                        { from: "rara", text: "ada ko, \"siwil art\" namanya", time: "19:30" },
                        { from: "jay", text: "rara tetap \"jogja\" kok ketanemny di ingatanku", time: "19:48" },
                        { from: "jay", text: "dengan taburan topping semarang", time: "19:48" },
                        { from: "jay", text: "ada kimpulnya yg ketanem, blm dipanen", time: "19:49" }
                    ]
                }
            ],
            secretNote: "Baru kenal beberapa menit, tapi obrolannya langsung nyasar dari foto di Siwil Art Kota Lama, Klaten naturalisasi Jogja, sampai aku nulis satu esai penuh buat jelasin apa itu kimpul.",
            quickGame: {
                prompt: "Selingan Pos 02 // Sebutan geografis paling kocak di DM perdana:",
                options: [
                    { label: "Jogja topping Semarang", reply: "Ditambah sepaket materi soal kimpul yang belum dipanen." },
                    { label: "Kuliah botani Kimpul", reply: "Baru kenal satu jam sudah keluar penjelasan agronomi lengkap!" }
                ]
            }
        },
        {
            id: "pos-03",
            biome: 1,
            postNum: "03",
            altitude: "280 mdpl",
            date: "27 Agu 2026",
            title: "Tips Muncak Gunung Andong & Olahraga Tangga FYP",
            vignette: "mountain-sunrise",
            pullQuote: "\"Tp kl mau first muncak, naik ke Andong.\"",
            lines: [
                "Di hari pertama ngobrol itu juga ketahuan kalau kamu emang suka gunung dan alam terbuka, sampai ngasih rekomendasi gunung buat pemula."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "27 Agu 2026",
                    prompt: "Inget gak kuliah singkat soal mendaki ini?",
                    messages: [
                        { from: "rara", text: "ga ada gn yg buat pemula ka", time: "20:54" },
                        { from: "rara", text: "semua gn kalo mau nanjak wajib olga dulu", time: "20:55" },
                        { from: "rara", text: "tp kl mau first muncak, naik ke andong", time: "20:55" },
                        { from: "jay", text: "hmmm okey okey", time: "20:56" },
                        { from: "jay", text: "naik turun tangga termasuk olga kan ya", time: "20:56" },
                        { from: "jay", text: "kemarin fyp udh berkali2 naik turun tangga", time: "20:57" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 03 // Naik turun tangga FYP sah gak jadi latihan muncak?",
                options: [
                    { label: "Harus olahraga beneran!", reply: "Kata mentor pendakian Andong, wajib cardio beneran dulu!" },
                    { label: "Lumayan buat pemanasan", reply: "Lumayan sih, tapi pas nanjak beneran tetep butuh napas cadangan." }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #01 // LEMBAH AWAL",
                teaser: "Bahas topik pembuka dulu di sini, lalu mainkan mini game tebak chat bareng!",
                question: "Jujur deh, pas pertama kali dapet DM 'Happy Bday!' tanggal 27 Agustus, impresi pertamamu soal aku waktu itu gimana? Sempat mikir aneh atau kaget gak?",
                hint: "Coba ceritain versi jujurnya ke Jay sebelum main mini game di bawah!",
                miniGame: {
                    type: "tebak-chat",
                    badge: "MINI GAME #01 // TEBAK PENGIRIM",
                    title: "Tebak Siapa yang Ngetik Kalimat Ini!",
                    desc: "Tebak 3 kutipan asli dari obrolan kita: ini ketikan Jay atau Rara?",
                    items: [
                        { quote: "\"canggung + canggung : nerveous, combo luar biasa\"", answer: "Rara" },
                        { quote: "\"ada kimpulnya yg ketanem, blm dipanen\"", answer: "Jay" },
                        { quote: "\"kabur si aku ka\"", answer: "Rara" }
                    ]
                }
            }
        },
        {
            id: "pos-04",
            biome: 1,
            postNum: "04",
            altitude: "400 mdpl",
            date: "02-16 Sep 2026",
            title: "Komunikasi Kode Lewat IG Notes Tengah Malam",
            vignette: "quill-arch",
            pullQuote: "Banyak obrolan rahasia awalnya numpang lewat status pendek IG Notes jam satu pagi.",
            lines: [
                "Sebelum chat rutin tiap hari, obrolan kita sering banget nyambung diam-diam lewat status IG Notes jam satu pagi.",
                "Dari niat pengin belajar ngoding bareng rak buku, saling kabarin pas lagi sakit, sampai munculnya asal-usul julukan 'hantu'."
            ],
            photos: [
                {
                    src: "assets/notes-ngoding.jpg",
                    alt: "IG Notes Rara ingin belajar ngoding dibalas status Jay pukul 01.43 WIB",
                    caption: "02 Sep 01.43: UUU SAYA SIAP MEN TUTOR",
                    contain: true
                },
                {
                    src: "assets/notes-sick.jpg",
                    alt: "IG Notes Rara no i'm sick dan status Jay are u okay",
                    caption: "07 Sep: Saling pantau lewat Notes pas lagi gak enak badan",
                    contain: true
                },
                {
                    src: "assets/notes-hantu.jpg",
                    alt: "IG Notes Rara bertanya buat siapa dan status Jay buat hantu",
                    caption: "16 Sep: Awal mula lore 'buat hantu' muncul",
                    contain: true
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 04 // Siapa paling cepat balas IG Notes jam 1 pagi?",
                options: [
                    { label: "Jay paling standby", reply: "Pukul 01.43 langsung pasang status SIAP MEN TUTOR!" },
                    { label: "Dua-duanya peka!", reply: "Dari sakit sampai 'buat hantu', kode Notes selalu nyambung." }
                ]
            }
        },
        {
            id: "pos-05",
            biome: 1,
            postNum: "05",
            altitude: "530 mdpl",
            date: "17 Sep 2026",
            title: "Typing Gen Alpha & Matkul Deeptalk Nilai 100",
            vignette: "quill-arch",
            pullQuote: "\"Canggung + canggung : nerveous, combo luar biasa.\"",
            lines: [
                "Malam 17 September jadi salah satu obrolan paling jujur sekaligus paling kocak di awal pertemanan kita."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "17 Sep 2026",
                    prompt: "Inget gak malam pas kita dapet nilai 100 ini?",
                    messages: [
                        { from: "rara", text: "kaka gen z kan?", time: "21:49" },
                        { from: "rara", text: "ngga, typing nya kyk gen alpha", time: "21:50" },
                        { from: "jay", text: "BRAINROT BGT YAK", time: "21:51" },
                        { from: "jay", text: "untuk matkul deeptalk malam ini rara mendapat nilai 100", time: "21:58" },
                        { from: "rara", text: "masi cabggung h3h3", time: "21:58" },
                        { from: "rara", text: "canggung + canggung : nerveous", time: "22:01" },
                        { from: "rara", text: "combo luar biasa", time: "22:02" },
                        { from: "jay", text: "secanggung apa klo kita ketemu ya", time: "22:02" },
                        { from: "rara", text: "kabur si aku ka", time: "22:03" }
                    ]
                }
            ],
            photos: [
                {
                    src: "assets/chat-gen-alpha.jpg",
                    alt: "Tangkapan layar DM membahas typing Gen Alpha pada 17 September 2026",
                    caption: "Bukti arsip tuduhan typing Gen Alpha",
                    contain: true
                },
                {
                    src: "assets/chat-deeptalk.jpg",
                    alt: "Tangkapan layar DM matkul deeptalk nilai 100",
                    caption: "Nilai 100 pertama plus rencana kabur kalau ketemu",
                    contain: true
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 05 // Typing siapa sebenarnya yang paling Gen Alpha?",
                options: [
                    { label: "Tetap Jay haha", reply: "Sampai dibilang BRAINROT BGT YAK malam itu!" },
                    { label: "Imbang kok sama 'cabggung'", reply: "Untung nilainya 100 di Matkul Deeptalk!" }
                ]
            }
        },
        {
            id: "pos-06",
            biome: 1,
            postNum: "06",
            altitude: "650 mdpl",
            date: "18 Sep 2026",
            title: "Janji Gunung & Manifesting Merbabu",
            vignette: "mountain-sunrise",
            pullQuote: "\"I take that as a challenge to get you there.\"",
            lines: [
                "Besok malamnya, topik obrolan langsung naik level dari ruang kuliah ke wacana explore alam terbuka dan puncak Merbabu."
            ],
            photos: [
                {
                    src: "assets/chat-merbabu.jpg",
                    alt: "Tangkapan layar DM tentang one day explore alam dan manifesting smt 2 merbabu",
                    caption: "18 Sep 2026: 'manifesting smt 2 merbabu'",
                    contain: true
                }
            ],
            secretNote: "Semoga tantangan 'get you there' ke Merbabu suatu hari beneran kejadian, bukan cuma jadi arsip tangkapan layar ya.",
            quickGame: {
                prompt: "Selingan Pos 06 // Siap kunci manifesting Merbabu jadi agenda nyata?",
                options: [
                    { label: "Kunci Merbabu!", reply: "Catat di arsip: tantangan 'get you there' masih berlaku." },
                    { label: "Pemanasan Andong dulu", reply: "Boleh banget, mulai dari Andong dulu baru Merbabu!" }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #02 // GERBANG LEMBAH",
                teaser: "Obrolan singkat soal gunung impian berdua plus duel suit pendaki!",
                question: "Kalau wacana muncak Andong atau Merbabu beneran kejadian, hal paling seru atau paling bikin khawatir buatmu pas naik gunung bareng apa nih?",
                hint: "Bahas sebentar, lalu tentuin siapa yang bawa logistik paling banyak lewat suit di bawah!",
                miniGame: {
                    type: "suit-pendaki",
                    badge: "MINI GAME #02 // SUIT PENDAKI",
                    title: "Duel Suit Penentu Pembawa Logistik",
                    desc: "Tantang tim pendaki! Yang kalah wajib traktir minuman hangat di pos berikutnya."
                }
            }
        },
        {
            id: "pos-07",
            biome: 2,
            postNum: "07",
            altitude: "780 mdpl",
            date: "23 Sep 2026",
            title: "\"Am I Not a Stranger?\"",
            vignette: "lantern-oak",
            pullQuote: "\"Kalo mereka butuh tempat cerita, ak bisa mnjdi pendengar yg baik.\"",
            lines: [
                "Masih di akhir September, ada obrolan random pagi-pagi soal gimana jadinya kalau ada stranger tiba-tiba oversharing."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "23 Sep 2026",
                    prompt: "Inget gak dialog pagi sebelum kuliah ini?",
                    messages: [
                        { from: "rara", text: "exmple : stranger oversharing ke ak gt?", time: "08:32" },
                        { from: "jay", text: "yeah", time: "08:38" },
                        { from: "jay", text: "am i not a stranger?", time: "08:38" },
                        { from: "rara", text: "kl stranger tb2 oversharing kaget ya ka. But, kalo mereka butuh tempat cerita ak bisa mnjdi pendengar yg baik", time: "08:44" },
                        { from: "rara", text: "kan udh kenalan kemarin ka?", time: "08:44" },
                        { from: "jay", text: "hai salam kenal KWKWK", time: "10:32" },
                        { from: "rara", text: "telatt bgt ka", time: "11:06" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 07 // Tanggal 23 September status kita resmi naik jadi:",
                options: [
                    { label: "Bukan stranger lagi", reply: "Kan udah kenalan kemarin, tapi tetep ngucapin 'hai salam kenal'!" },
                    { label: "Pendengar yang baik", reply: "Salah satu sifatmu yang paling bikin nyaman diajak ngobrol." }
                ]
            }
        },
        {
            id: "pos-08",
            biome: 2,
            postNum: "08",
            altitude: "890 mdpl",
            date: "24 Sep 2026",
            title: "Insiden \"PRANKK / RARA IH\" & Cita-Cita Content Creator",
            vignette: "lantern-oak",
            pullQuote: "\"PRANKK\" -> \"RARA IH\"",
            lines: [
                "Sehari setelahnya, baru juga bilang mau berhenti becanda, tiba-tiba keluar satu kata pamungkas yang sukses bikin kaget."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "24 Sep 2026",
                    prompt: "Inget gak momen kena prank jam sepuluh malam ini?",
                    messages: [
                        { from: "rara", text: "cukup", time: "22:09" },
                        { from: "jay", text: "ok..", time: "22:09" },
                        { from: "rara", text: "PRANKK", time: "22:10" },
                        { from: "jay", text: "RARA IH", time: "22:11" },
                        { from: "rara", text: "NGAKAK BGT", time: "22:11" },
                        { from: "jay", text: "ku viralin lho ya kmu", time: "22:12" },
                        { from: "rara", text: "mau dong viral, sekalian jd content creator", time: "22:12" }
                    ]
                }
            ],
            photos: [
                {
                    src: "assets/chat-prankk.jpg",
                    alt: "Tangkapan layar DM Rara mengirim PRANKK dibalas RARA IH",
                    caption: "24 Sep 22.11 WIB: Bukti asli insiden gentayangan di DM",
                    contain: true
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 08 // Nilai kejutan prank 'RARA IH' malam itu:",
                options: [
                    { label: "100 / 100 sukses ngakak", reply: "Sampai beneran diviralin masuk ke website arsip ini!" },
                    { label: "Bakat content creator!", reply: "Tinggal eksekusi bareng nanti kontennya." }
                ]
            }
        },
        {
            id: "pos-09",
            biome: 2,
            postNum: "09",
            altitude: "980 mdpl",
            date: "29 Sep 2026",
            title: "Penunggu Toko & Coklat Kunafa dari Hantu",
            vignette: "lantern-oak",
            pullQuote: "\"Tdi jg sebenernya tu hantu yg ngasih kamu coklat.\"",
            lines: [
                "Gara-gara becanda soal jadi 'penunggu', nama hantu kebawa terus sampai urusan ngasih coklat kunafa."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "29 Sep 2026",
                    prompt: "Inget gak cerita coklat ghoib ini?",
                    messages: [
                        { from: "jay", text: "nanti klo ada customer yg dateng nanyain masa ku jawab \"maaf kak, saya bukan book advisor, saya penunggu disini\"", time: "22:32" },
                        { from: "rara", text: "so, brarti kaka hantu", time: "22:33" },
                        { from: "jay", text: "tdi jg sebenernya tu hantu yg ngasih kamu coklat", time: "22:41" },
                        { from: "rara", text: "pantesan, agak ghoib", time: "22:41" },
                        { from: "jay", text: "hantu ny nempel ik", time: "22:44" },
                        { from: "rara", text: "ga keliatan", time: "22:46" }
                    ]
                }
            ],
            footnote: "Besoknya tanggal 30 September, adekmu malah ikutan suka dan nanyain coklat dari hantu yang satu itu.",
            quickGame: {
                prompt: "Selingan Pos 09 // Review jujur coklat kunafa dari 'hantu':",
                options: [
                    { label: "Enak banget sampai adek suka", reply: "Best review! Kapan-kapan boleh dong hantu-nya bawain lagi." },
                    { label: "Agak ghoib tapi manis", reply: "Hantu baik hati memang beda." }
                ]
            }
        },
        {
            id: "pos-10",
            biome: 2,
            postNum: "10",
            altitude: "1.090 mdpl",
            date: "02-03 Okt 2026",
            title: "\"In This Economy Harga Buku\" & Gramed Jalma",
            vignette: "quill-arch",
            pullQuote: "Dari kode Notes 'jalma -> maw maw' sampai makan malam perdana & pindah ke WhatsApp.",
            lines: [
                "Tanggal 2 Oktober pagi kita sempat sepakat soal mahalnya buku zaman sekarang. Besok siangnya lewat IG Notes, tiba-tiba janjian jalan perdana ke Gramedia Jalma."
            ],
            chats: [
                {
                    platform: "Instagram DM // @nsarhmaaw_",
                    date: "02 & 03 Okt 2026",
                    prompt: "Inget gak malam habis pulang dari Gramed Jalma?",
                    messages: [
                        { from: "rara", text: "itulah pentingnya baca buku", time: "02 Okt 08:33" },
                        { from: "rara", text: "in this economy harga buku luar biasa sekali ya", time: "02 Okt 08:33" },
                        { from: "jay", text: "kan tdi aku bilang aku tu tukang candid", time: "03 Okt 23:32" },
                        { from: "jay", text: "tdi tu ada mau ku foto pas kmu lagi baca belakangnya buku, tpi hpnya malah ngelag", time: "03 Okt 23:33" },
                        { from: "rara", text: "yg bnr yg mn y", time: "03 Okt 23:33" },
                        { from: "jay", text: "gabisanya ngepose in", time: "03 Okt 23:33" }
                    ]
                }
            ],
            photos: [
                {
                    src: "assets/notes-jalma.jpg",
                    alt: "IG Notes Rara menulis jalma dan dibalas maw maw oleh Jay",
                    caption: "03 Okt 14.01: Awal ajakan 'jalma -> maw maw'",
                    contain: true
                },
                {
                    src: "assets/notes-letsgo.jpg",
                    alt: "IG Notes lanjut let's goo",
                    caption: "Obrolan niat di Notes sebelum langsung berangkat",
                    contain: true
                },
                {
                    src: "assets/moment-gramed.jpg",
                    alt: "Foto bersama saat jalan ke Gramedia Jalma",
                    caption: "Arsip pertama di Gramed Jalma"
                },
                {
                    src: "assets/moment-dinner-oct3.jpg",
                    alt: "Makan malam 3 Oktober 2026 bersama Rara",
                    caption: "Lanjut makan malam 3 Oktober"
                }
            ],
            secretNote: "Hari itu sekaligus jadi malam perdana kita pindah dari DM Instagram ke WhatsApp, awalnya cuma gara-gara malas buka IG dan lanjut bahas wawancara EESE lewat Google Meet.",
            quickGame: {
                prompt: "Selingan Pos 10 // Momen terbaik di tanggal 3 Oktober versi kamu:",
                options: [
                    { label: "Kode Notes 'jalma -> maw maw'", reply: "Singkat, padat, langsung jadi jalan perdana!" },
                    { label: "Makan malam & pindah WA", reply: "Sejak malam itu obrolannya makin panjang dan lancar." }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #03 // HUTAN LENTERA",
                teaser: "Flashback ke 3 Oktober kemarin plus main nyalain 5 lentera hutan!",
                question: "Waktu pertama kali jalan bareng ke Gramed Jalma tanggal 3 Oktober, awalnya canggung banget gak sih? Momen apa yang bikin suasana hari itu tiba-tiba cair?",
                hint: "Bahas versi POV Rara vs POV Jay, terus nyalain ke-5 lenteranya di bawah!",
                miniGame: {
                    type: "lentera-hutan",
                    badge: "MINI GAME #03 // LENTERA KENANGAN",
                    title: "Nyalakan 5 Lentera Hutan Malam Ini",
                    desc: "Klik tiap lentera satu per satu untuk menerangi 5 kata kunci babak Hutan Lentera!",
                    lanterns: ["JALMA", "MAW MAW", "CANDID LAG", "EESE MEET", "PINDAH WA"]
                }
            }
        },
        {
            id: "pos-11",
            biome: 2,
            postNum: "11",
            altitude: "1.200 mdpl",
            date: "08-09 Okt 2026",
            title: "Ketiduran Depan ThinkPad & Misteri Pabrik Permen Fumira",
            vignette: "teacup-stars",
            pullQuote: "Riset serius tengah sore: ternyata bau permen itu dari pabrik Erela, bukan Fumira.",
            lines: [
                "Sejak pindah ke WhatsApp, obrolannya makin nyambung ke hal-hal gak terduga: dari momen nugas sampai ketiduran di kafe, sampai riset detektif soal asal bau permen di jalan."
            ],
            photos: [
                {
                    src: "assets/moment-sleep-cafe.jpg",
                    alt: "Rara ketiduran di meja kayu kafe di depan laptop ThinkPad",
                    caption: "08 Okt 2026: Mode tumbang di depan ThinkPad"
                }
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "09 Okt 2026",
                    prompt: "Inget gak riset dadakan soal pabrik bau permen?",
                    messages: [
                        { from: "jay", text: "sama yg fumira, tau gk? bau permen klo lewat sore2 wkwkw", time: "16:48" },
                        { from: "rara", text: "fumira? mana tu", time: "16:48" },
                        { from: "jay", text: "After research, ternyata bukan dari fumira, tpi dari pabrik dibelakangnya namanya erela, pabrik obat, fumira tu ternyata pabrik atap seng galvalum..", time: "16:59" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 11 // Asal bau permen sore hari ternyata dari:",
                options: [
                    { label: "Pabrik Erela!", reply: "Pantas dicari tahu beneran selama 11 menit lewat riset!" },
                    { label: "Bukan Fumira si seng", reply: "Misteri berbulan-bulan akhirnya terpecahkan tuntas." }
                ]
            }
        },
        {
            id: "pos-12",
            biome: 2,
            postNum: "12",
            altitude: "1.300 mdpl",
            date: "12 Okt 2026",
            title: "Malam Khodam Silaturahmi",
            vignette: "lantern-oak",
            pullQuote: "\"Khodam kita perlu dipertemukan, biar mereka silaturahmi.\"",
            lines: [
                "Memasuki pertengahan Oktober, chat WhatsApp jam sebelas malam mulai gak bisa diprediksi arahnya, sampai muncul wacana pertemuan khodam."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "12 Okt 2026",
                    prompt: "Sesi random jam sebelas malam:",
                    messages: [
                        { from: "rara", text: "yakan, aplgi kl khodam ny udh keluar", time: "22:54" },
                        { from: "rara", text: "gbsa posthink lagi", time: "22:54" },
                        { from: "jay", text: "khodam kita perlu dipertemukan, biar mereka silaturahmi", time: "22:58" },
                        { from: "rara", text: "pake selimut tidur ka", time: "22:59" },
                        { from: "rara", text: "kaka udh mulai gila", time: "22:59" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 12 // Jam segini khodamnya masih aman atau waktunya selimutan?",
                options: [
                    { label: "Pake selimut tidur ka", reply: "Jawaban Rara paling realistis setiap Jay mulai random." },
                    { label: "Biarkan silaturahmi dulu", reply: "Bentar lagi pasti muncul bahasan makin random nih." }
                ]
            }
        },
        {
            id: "pos-13",
            biome: 2,
            postNum: "13",
            altitude: "1.380 mdpl",
            date: "15 Okt 2026",
            title: "Fitur Otak Multitasking: Nyanyi Sambil Nyetir",
            vignette: "headset-waves",
            pullQuote: "\"I feel youu ka, tp jgn sering2 bahaya ka.\"",
            lines: [
                "Tiga hari kemudian giliran siang hari yang bikin heran karena ngaku sempat microsleep tapi suara tetap lanjut nyanyi."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "15 Okt 2026",
                    prompt: "Ngaku microsleep sambil nyanyi dan nyetir:",
                    messages: [
                        { from: "jay", text: "aku nyanyi buat biar gk ketiduran tp bisa bisanya aku tu microsleep dalam keadaan nyanyi dan nyetir, ini fitur otak multitasking gk si", time: "11:09" },
                        { from: "rara", text: "i feel youu ka", time: "11:29" },
                        { from: "rara", text: "kemungkinan bisa jadi", time: "11:30" },
                        { from: "rara", text: "tp jgn sering2 bahaya ka", time: "11:30" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 13 // Nasihat wajib kalau lagi nyetir jauh:",
                options: [
                    { label: "Jangan sering2 bahaya!", reply: "Siap bu dokter lalu lintas, istirahat dulu kalau ngantuk." },
                    { label: "Nyanyi bareng aja", reply: "Kalau ada partner nyanyi di sebelahnya pasti langsung melek!" }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #04 // UJUNG HUTAN",
                teaser: "Uji ingatan jam-jam random kita sebelum buka pintu rahasia akun second!",
                question: "Dari obrolan sore sampai hampir tengah malam di bulan September-Oktober, kebiasaan acak apa yang paling kerasa bedanya dibanding awal kita kenal?",
                hint: "Bahas sebentar, lalu tes ketepatan jam begadang kalian lewat game di bawah!",
                miniGame: {
                    type: "tebak-jam",
                    badge: "MINI GAME #04 // TEBAK JAM ARSIP",
                    title: "Cocokkan Momen dengan Jam Kejadiannya",
                    desc: "Tebak kapan momen legendaris ini terekam di log chat kita!",
                    rounds: [
                        { label: "IG Note 'UUU SAYA SIAP MEN TUTOR'", choices: ["01.43 WIB", "14.01 WIB"], correct: "01.43 WIB" },
                        { label: "Insiden DM 'PRANKK -> RARA IH'", choices: ["22.10 WIB", "08.33 WIB"], correct: "22.10 WIB" },
                        { label: "Sesi Khodam Silaturahmi", choices: ["22.58 WIB", "16.59 WIB"], correct: "22.58 WIB" }
                    ]
                }
            }
        },
        {
            id: "pos-14",
            biome: 3,
            postNum: "14",
            altitude: "1.520 mdpl",
            date: "17 Okt 2026",
            title: "Pintu Rahasia Akun Second: Kontrak Tak Tertulis",
            vignette: "moon-angel",
            pullQuote: "\"Kesalahan engkau wahai bidadari, adalah menjalin kontak dengan sang gila.\"",
            lines: [
                "Entah angin apa yang bawa obrolan akun second ber berry x jiddan side. tiba-tiba dibuka pakai kalimat paling gak ada konteks."
            ],
            chats: [
                {
                    platform: "IG Second // ber berry x jiddan side.",
                    date: "17 Okt 2026",
                    prompt: "Inget gak perkenalan paling gak jelas di akun second?",
                    messages: [
                        { from: "rara", text: "emg gila", time: "20:15" },
                        { from: "jay", text: "halo ini siapa ya? maaf, tiba tiba bgt ngatain gila", time: "20:27" },
                        { from: "rara", text: "bidadari", time: "20:35" },
                        { from: "jay", text: "OMG AM I TALKING WITH AN ANGEL?", time: "20:43" },
                        { from: "jay", text: "kubeliin, trus kukasih kamu, jdi hak milik kamu, trus kucuri", time: "21:06" },
                        { from: "jay", text: "kesalahan engkau wahai bidadari, adalah menjalin kontak dengan sang gila", time: "21:13" },
                        { from: "jay", text: "perlahan kontak tersebut berubah menjadi kontrak tak tertulis", time: "21:13" },
                        { from: "rara", text: "tidak adil rasanya jika kontrak dilakukan tanpa persetujuan kedua pihak", time: "21:25" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 14 // Status kontrak tak tertulis ber berry x jiddan side.:",
                options: [
                    { label: "Setuju & dilanjutkan!", reply: "Kontrak resmi lanjut ke obrolan akun second berikutnya." },
                    { label: "Bidadari vs Sang Gila", reply: "Pembukaan paling dramatis sepanjang sejarah akun second!" }
                ]
            }
        },
        {
            id: "pos-15",
            biome: 3,
            postNum: "15",
            altitude: "1.630 mdpl",
            date: "18-19 Okt 2026",
            title: "Era Saling Panggil \"Kebo\" & Diskusi Kopi vs Matcha",
            vignette: "teacup-stars",
            pullQuote: "\"Ak sekali minum kopi gaisa tidur\" dibalas \"kaka noh kebo\".",
            lines: [
                "Baru sehari kenalan lewat akun second, kosakata ejekannya langsung nambah, lanjut obrolan tengah malam soal kopi dan matcha."
            ],
            chats: [
                {
                    platform: "IG Second // ber berry x jiddan side.",
                    date: "18 Okt 2026",
                    prompt: "Reaksi saat baru bangun setengah sadar:",
                    messages: [
                        { from: "jay", text: "jgn tnya kpnjgn fk, ak baru bgt bgn tidur.. ni mata msi stngh sadar", time: "08:18" },
                        { from: "rara", text: "kebo kebo", time: "08:22" }
                    ]
                },
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "19 Okt 2026",
                    prompt: "Lanjut jam 12 malam bahas kafein dan giliran balas dendam:",
                    messages: [
                        { from: "jay", text: "klo matcha?", time: "00:04" },
                        { from: "rara", text: "gaa, kan ga kopi", time: "00:04" },
                        { from: "rara", text: "ak sekali minum kopi gaisa tidur", time: "00:05" },
                        { from: "rara", text: "kaka noh kebo", time: "00:36" },
                        { from: "jay", text: "IDIH meremehkan", time: "00:36" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 15 // Pilih minuman wajib teman begadang:",
                options: [
                    { label: "Matcha manis", reply: "Aman buat mata dan tetap ramah di jam tidur!" },
                    { label: "Kopi anti ngantuk", reply: "Resiko langsung melek sampai subuh!" }
                ]
            }
        },
        {
            id: "pos-16",
            biome: 3,
            postNum: "16",
            altitude: "1.740 mdpl",
            date: "22-23 Okt 2026",
            title: "Dua Gelas Es, Telepon 1 Jam 22 Menit, & Selfie Locket",
            vignette: "teacup-stars",
            pullQuote: "Dari dua gelas es sore hari sampai telpon 1.22.46 yang gak terasa lewat tengah malam.",
            lines: [
                "Dari dua gelas es buat nemenin nugas sore tanggal 22 Oktober, lanjut telepon panjang 1 jam 22 menit 46 detik lewat tengah malam, sampai selfie kacamata di Locket."
            ],
            photos: [
                {
                    src: "assets/moment-coffee-oct22.jpg",
                    alt: "Dua gelas minuman es di meja sore 22 Oktober 2026",
                    caption: "22 Okt: Bekal sore sebelum nugas"
                },
                {
                    src: "assets/moment-wa-call.jpg",
                    alt: "Tangkapan layar panggilan WhatsApp berdurasi 1 jam 22 menit 46 detik",
                    caption: "22 Okt: Bukti call 1.22.46",
                    contain: true
                },
                {
                    src: "assets/moment-selfie-oct23.jpg",
                    alt: "Foto Locket berdua memakai kacamata tanggal 23 Oktober 2026",
                    caption: "23 Okt: Arsip Locket kacamata"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 16 // Pas call 1 jam 22 menit itu terasa sebentar atau lama?",
                options: [
                    { label: "Tau-tau udah jam satu aja", reply: "Tandanya ngobrolnya emang gak kerasa sama sekali!" },
                    { label: "Pengen ulangi lagi", reply: "Masih banyak topik seru buat dibahas berikutnya." }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #05 // GERBANG BIDADARI",
                teaser: "Flashback ke telpon 1.22.46 plus Tes Telepati 3-2-1 Sebut Bareng!",
                question: "Di call tengah malam 1 jam 22 menit itu, masih inget gak kita bahas apa aja sampai gak sadar udah lewat jam satu? Sebenarnya siapa yang paling susah tidur duluan di antara kita?",
                hint: "Tatap jam 3-2-1 lalu jawab 3 pertanyaan telepati di bawah ini bersamaan!",
                miniGame: {
                    type: "kompak-123",
                    badge: "MINI GAME #05 // TES TELEPATI 3-2-1",
                    title: "Sebut Bareng Dalam Hitungan 3-2-1!",
                    desc: "Untuk tiap tema, hitung 3-2-1 bareng Jay lalu sebut satu jawaban. Klik hasilnya!",
                    prompts: [
                        "Sebutkan 1 minuman favorit buat nemenin nugas!",
                        "Sebutkan 1 tempat jalan bareng yang pengen diulang!",
                        "Sebutkan 1 hal pertama yang terlintas kalau denger kata 'Merbabu'!"
                    ]
                }
            }
        },
        {
            id: "pos-17",
            biome: 3,
            postNum: "17",
            altitude: "1.840 mdpl",
            date: "26 Okt 2026",
            title: "\"Modus Mau Mutual Discord\"",
            vignette: "headset-waves",
            pullQuote: "\"Wait, ak download dlu, ak aj g pernah main.\"",
            lines: [
                "Sebelum akhirnya betah berjam-jam di voice channel, dulunya kamu sampai harus download Discord dulu dari nol."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "26 Okt 2026",
                    prompt: "Inget gak momen ngajak mutualan Discord ini?",
                    messages: [
                        { from: "jay", text: "yang biasanya aneh aneh kamu gak si", time: "21:58" },
                        { from: "rara", text: "APA YA?", time: "21:59" },
                        { from: "rara", text: "di discord kah", time: "21:59" },
                        { from: "jay", text: "kwkw modus mau mutual discord ini", time: "21:59" },
                        { from: "rara", text: "wait, ak donwload dlu", time: "21:59" },
                        { from: "rara", text: "ak aj g pernah main", time: "21:59" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 17 // Plot twist terbesar setelah download Discord:",
                options: [
                    { label: "Jadi Study Room 5 jam+", reply: "Dari gak pernah main jadi basecamp ambis & nobar!" },
                    { label: "Mutualan paling sukses", reply: "Best download tahun ini!" }
                ]
            }
        },
        {
            id: "pos-18",
            biome: 3,
            postNum: "18",
            altitude: "1.940 mdpl",
            date: "29-30 Okt 2026",
            title: "Spotify Blend 100%, Plot Horor Novel, & Typo \"Lau Bercerita\"",
            vignette: "headset-waves",
            pullQuote: "Spotify Blend 100% cocok, lanjut ajakan 'lau bercerita' di malam sebelum bioskop.",
            lines: [
                "Tanggal 29 Oktober, Spotify Blend JyZ + Rara tembus 100% cocok lewat lagu La La Lost You, lalu disambung bahasan cerita horor sampai typo pas ngajak nonton keesokan malamnya."
            ],
            photos: [
                {
                    src: "assets/moment-spotify.jpg",
                    alt: "Spotify Blend JyZ dan Rara 100 persen cocok",
                    caption: "29 Okt: Spotify Blend 100% cocok (La La Lost You)",
                    contain: true
                }
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "30 Okt 2026",
                    prompt: "Dua obrolan kocak tanggal 30 Oktober sebelum berangkat bioskop:",
                    messages: [
                        { from: "rara", text: "novel, di nikahin diem2, HOROR BGT GILA", time: "00:36" },
                        { from: "rara", text: "habis ini gw ganti nama, liat aj", time: "00:36" },
                        { from: "rara", text: "pa mau nonton", time: "20:48" },
                        { from: "rara", text: "lau bercerita", time: "20:48" },
                        { from: "jay", text: "HIIII apipi ril date", time: "20:48" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 18 // Skor Spotify Blend kita yang tembus 100% lagu andalannya:",
                options: [
                    { label: "La La Lost You", reply: "Auto masuk playlist wajib setiap lagi nugas bareng." },
                    { label: "Judul baru 'Lau Bercerita'", reply: "Tetep berangkat nonton walaupun judulnya kepeleset dikit." }
                ]
            }
        },
        {
            id: "pos-19",
            biome: 3,
            postNum: "19",
            altitude: "2.040 mdpl",
            date: "31 Okt 2026",
            title: "The Park XXI Kursi D9-D10, Mirror Selfie, & Kucing Oren",
            vignette: "moon-angel",
            pullQuote: "Row D9 & D10 di The Park XXI, mirror selfie habis nonton, dan kucing oren wajib.",
            lines: [
                "Besoknya beneran berangkat ke The Park Semarang XXI duduk di baris D9 dan D10, ditutup mirror selfie plus ketemu satu kucing oren numpang eksis."
            ],
            photos: [
                {
                    src: "assets/moment-laut-tickets.jpg",
                    alt: "Dua tiket bioskop The Park Semarang XXI baris D nomor 9 dan 10",
                    caption: "31 Okt: Tiket bioskop XXI Row D9 & D10"
                },
                {
                    src: "assets/moment-mirror-oct31.jpg",
                    alt: "Mirror selfie berdua setelah menonton 31 Oktober 2026",
                    caption: "31 Okt: Mirror selfie habis nonton"
                },
                {
                    src: "assets/moment-orange-cat.webp",
                    alt: "Kucing oranye lucu yang ditemui Rara",
                    caption: "Penampakan wajib: kucing oren"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 19 // Bagian terbaik hari nonton tanggal 31 Oktober:",
                options: [
                    { label: "Mirror selfie & D9-D10", reply: "Tiketnya masih tersimpan rapi di arsip!" },
                    { label: "Kucing oren lewat", reply: "Gak sah pulang kalau belum motret kucing di jalan." }
                ]
            }
        },
        {
            id: "pos-20",
            biome: 3,
            postNum: "20",
            altitude: "2.150 mdpl",
            date: "01 Nov 2026",
            title: "Ambis 5 Jam 47 Menit, Dunia Fairy Tale & Morikei, Wave to Earth, & Pinned Chat",
            vignette: "moon-angel",
            pullQuote: "\"Soon nantikan akun ku yg isinya konten otd fairy tale, morikei, shoujoo yeaa.\"",
            lines: [
                "Jam dua pagi tanggal 1 November kamu cerita soal impian akun bertema fairy tale, morikei, shoujo, kangen Studio Ghibli, sampai cerita musik dari ayah dan wave to earth. Sorenya kita tembus 5 jam 47 menit di Discord SIPALING AMBIS KEJAR KARIR."
            ],
            chats: [
                {
                    platform: "IG Second // ber berry x jiddan side.",
                    date: "01 Nov 2026",
                    prompt: "Obrolan jam 02.29 pagi tentang dunia impian & pesan ter-pin:",
                    messages: [
                        { from: "rara", text: "aamiinn, soon nantikan akun ku yg isinya konten otd fairy tale, morikei, shoujoo yeaa", time: "02:29" },
                        { from: "jay", text: "YEAAAA", time: "02:29" },
                        { from: "rara", text: "KANGEN NONTON GHIBLI DEH", time: "02:31" },
                        { from: "jay", text: "UJIAN DLU WE", time: "02:32" },
                        { from: "rara", text: "alasan ak suka wave to earth, esemka merubah playlist alay gweh, tdk sia2 mengikuti arahan ayah", time: "02:33" },
                        { from: "jay", text: "nurut sama ayah, jangan bikin kecewa beliau ya", time: "02:35" },
                        { from: "rara", text: "kaka tu emg pendengar yg baik", time: "02:36" },
                        { from: "jay", text: "i will", time: "02:37" }
                    ]
                }
            ],
            photos: [
                {
                    src: "assets/moment-discord-study.jpg",
                    alt: "Tangkapan layar panggilan Discord Study Room 5 jam 47 menit",
                    caption: "Discord Study Room 1: 5 jam 47 menit",
                    contain: true
                },
                {
                    src: "assets/moment-berberry-pin.jpg",
                    alt: "Pesan terpin di akun ber berry: kaka tu emg pendengar yg baik",
                    caption: "Pesan yang diam-diam di-pin",
                    contain: true
                }
            ],
            secretNote: "Seluruh estetika dongeng, lentera, warna berry senja, dan puncak bintang di halaman ini terinspirasi langsung dari ceritamu jam 02.29 pagi ini.",
            quickGame: {
                prompt: "Selingan Pos 20 // Lagu atau vibe paling pas buat sesi Study Room 5 jam:",
                options: [
                    { label: "Playlist Wave to Earth", reply: "Bikin suasana fokus tapi tetap hangat sampai jam 02.30 pagi." },
                    { label: "Dunia Fairy Tale & Morikei", reply: "Estetika utamanya langsung menginspirasi web ini!" }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #06 // LANGIT MORIKEI",
                teaser: "Ngomongin akun konten fairy tale impianmu plus game Susun Kata Typo!",
                question: "Kalau akun konten bertema fairy tale & morikei impianmu udah mulai jalan nanti, lokasi atau konsep outfit pertama apa yang paling pengin kamu wujudin?",
                hint: "Habis bahas lokasi pemotretan pertama, coba susun 3 frasa legenda kita di bawah!",
                miniGame: {
                    type: "susun-typo",
                    badge: "MINI GAME #06 // SUSUN KATA LORE",
                    title: "Rangkai Ulang 3 Frasa Legendaris",
                    desc: "Pilih kata yang tepat untuk melengkapi potongan frasa ikonik kita!",
                    puzzles: [
                        { prefix: "pa mau nonton ___", choices: ["lau bercerita", "sang gila"], answer: "lau bercerita" },
                        { prefix: "canggung + canggung = ___", choices: ["nerveous", "cabggung"], answer: "nerveous" },
                        { prefix: "call me rara not ___", choices: ["semprul", "kebo"], answer: "semprul" }
                    ]
                }
            }
        },
        {
            id: "pos-21",
            biome: 4,
            postNum: "21",
            altitude: "2.240 mdpl",
            date: "02 & 04 Nov 2026",
            title: "Atedoz Library Theme, Red Berry Tea, & #sayapunyakamera",
            vignette: "camera-stars",
            pullQuote: "\"Aku punya banyak bahan kontenn muncakk\" -> \"boleh #sayapunyakamera\".",
            lines: [
                "Tanggal 2 November kita nugas bareng sambil minum Red Berry Tea dan foto bertema perpustakaan di Atedoz November Coffee. Dua hari kemudian, wacana bawa kamera ke Merbabu rame lagi."
            ],
            photos: [
                {
                    src: "assets/moment-library-booth.jpg",
                    alt: "Strip photobooth Atedoz Library Theme berdua pada 2 November 2026",
                    caption: "Atedoz Photobooth: Library Theme"
                },
                {
                    src: "assets/moment-redberry-nov2.jpg",
                    alt: "Meja kafe dengan dua minuman termasuk Red Berry Tea tanggal 2 November 2026",
                    caption: "02 Nov: Red Berry Tea & lanyard BINUS"
                }
            ],
            chats: [
                {
                    platform: "IG Second // ber berry x jiddan side.",
                    date: "04 Nov 2026",
                    prompt: "Inget gak pas bahas bahan konten muncak?",
                    messages: [
                        { from: "rara", text: "aku punya banyak bahan kontenn muncakk", time: "13:22" },
                        { from: "jay", text: "boleh #sayapunyakamera", time: "13:22" },
                        { from: "rara", text: "HOYY", time: "13:23" },
                        { from: "rara", text: "benerab meebabu?", time: "13:23" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 21 // Tugas wajib pemilik tagar #sayapunyakamera saat trip nanti:",
                options: [
                    { label: "Motoin konten Rara terus", reply: "Kamera udah siap tempur sejak zaman FYP!" },
                    { label: "Gantian foto berdua", reply: "Biar gak cuma candid, tapi banyak stok foto bareng juga." }
                ]
            }
        },
        {
            id: "pos-22",
            biome: 4,
            postNum: "22",
            altitude: "2.320 mdpl",
            date: "07 Nov 2026",
            title: "Protes Resmi: \"Call Me Rara Not Semprul\"",
            vignette: "quill-arch",
            pullQuote: "\"Call me rara not semprul\" -> \"tpi cute loh\".",
            lines: [
                "Tanggal 7 November malam akhirnya keluar nota protes resmi dari akun ber berry gara-gara dipanggil semprul."
            ],
            chats: [
                {
                    platform: "IG Second // ber berry",
                    date: "07 Nov 2026",
                    prompt: "Protes resmi soal panggilan:",
                    messages: [
                        { from: "jay", text: "kenapa si semprul kok marah marah?", time: "20:36" },
                        { from: "rara", text: "call me rara not semprul", time: "20:37" },
                        { from: "jay", text: "tpi cute loh", time: "20:44" }
                    ]
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 22 // Pilih julukan yang boleh dipakai sekarang:",
                options: [
                    { label: "Rara saja (resmi)", reply: "Baik Tuan Putri Rara, resmi dicatat!" },
                    { label: "Semprul pas lagi bercanda", reply: "Tetep cute kok kata arsip chat jam 20.44." }
                ]
            }
        },
        {
            id: "pos-23",
            biome: 4,
            postNum: "23",
            altitude: "2.400 mdpl",
            date: "09 Nov 2026",
            title: "Tagar #SIAPJDIPENDAMPING Belajar Bahasa Inggris",
            vignette: "quill-arch",
            pullQuote: "\"Kalo mau ditemenin belajar kyk jadi pendamping fine fine aja #SIAPJDIPENDAMPING.\"",
            lines: [
                "Dua hari berselang giliran bahas rencana nemenin belajar Bahasa Inggris bareng tanpa kesan menggurui."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "09 Nov 2026",
                    prompt: "Inget gak janji jadi pendamping belajar Bahasa Inggris ini?",
                    messages: [
                        { from: "rara", text: "bolehh", time: "18:00" },
                        { from: "jay", text: "bisaaa, tpi aku gabisa yg kayak tutor english gitu woeee itu butuh skill, tpi kalo mau ditemenin belajar kyk jadi pendamping fine fine aja #SIAPJDIPENDAMPING", time: "18:01" },
                        { from: "jay", text: "english", time: "18:01" },
                        { from: "rara", text: "iya juga", time: "18:01" },
                        { from: "rara", text: "yauda", time: "18:02" }
                    ]
                }
            ],
            secretNote: "Tagar #SIAPJDIPENDAMPING resmi tercatat di arsip: kapan pun butuh teman belajar atau diskusi, pintu selalu kebuka.",
            quickGame: {
                prompt: "Selingan Pos 23 // Agenda perdana kelas #SIAPJDIPENDAMPING:",
                options: [
                    { label: "Practice speaking santai", reply: "Biar lancar ngobrol bareng sambil ngopi atau Study Room." },
                    { label: "Nonton film sub English", reply: "Belajar paling ampuh sambil nonton Ghibli atau fantasi!" }
                ]
            }
        },
        {
            id: "pos-24",
            biome: 4,
            postNum: "24",
            altitude: "2.480 mdpl",
            date: "15 Nov 2026",
            title: "Nobar Fantasi Tengah Malam di Discord",
            vignette: "headset-waves",
            pullQuote: "Dari Study Room kejar karir jadi bioskop mini Fantastic Beasts pukul 23.42.",
            lines: [
                "Tanggal 15 November jam 23.42 malam, channel Discord Study Room 1 berubah fungsi dari tempat kejar karir jadi bioskop mini buat nobar dunia sihir Fantastic Beasts."
            ],
            photos: [
                {
                    src: "assets/moment-discord-movie.jpg",
                    alt: "Layar Discord Study Room 1 Jay dan Raraw sedang streaming film",
                    caption: "15 Nov 23.42: Jay. & Raraw di Discord",
                    contain: true
                },
                {
                    src: "assets/moment-movie-screen.jpg",
                    alt: "Layar laptop memutar adegan Fantastic Beasts di malam hari",
                    caption: "15 Nov 23.42: Adegan Fantastic Beasts"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 24 // Antrean tontonan nobar berikutnya:",
                options: [
                    { label: "Maraton Studio Ghibli", reply: "Dari Howl's Moving Castle sampai Spirited Away siap diputar!" },
                    { label: "Lanjut film dunia sihir", reply: "Tinggal atur jam call malam di Study Room 1!" }
                ]
            }
        },
        {
            id: "pos-25",
            biome: 4,
            postNum: "25",
            altitude: "2.560 mdpl",
            date: "13-18 Nov 2026",
            title: "Ramen Hangat, Dua Kartu Flazz, & Kamera Perpustakaan",
            vignette: "camera-stars",
            pullQuote: "\"Setiap ad kamera ada rara\" dari mangkuk ramen sampai sudut perpus.",
            lines: [
                "Pertengahan November penuh momen kecil yang hangat: berburu semangkuk ramen bareng, foto dua kartu Flazz berdampingan tanggal 17 November, lalu esoknya kamera langsung diarahkan ke kamu di perpustakaan."
            ],
            photos: [
                {
                    src: "assets/moment-ramen.jpg",
                    alt: "Dua mangkuk ramen hangat",
                    caption: "Misi cari mie hangat"
                },
                {
                    src: "assets/moment-flazz-nov17.jpg",
                    alt: "Dua kartu Flazz BINUS berdampingan tanggal 17 November 2026",
                    caption: "17 Nov: Dua kartu Flazz sebelahan",
                    contain: true
                },
                {
                    src: "assets/moment-camera.jpg",
                    alt: "Rara memegang kamera di perpustakaan",
                    caption: "18 Nov: 'setiap ad kamera ada rara'"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 25 // Misi cari makan paling gampang bikin happy berdua:",
                options: [
                    { label: "Semangkuk ramen hangat!", reply: "Cocok buat mengembalikan energi habis keliling kampus." },
                    { label: "Foto booth & hunting spot", reply: "Kamera siap, kartu Flazz juga selalu berdampingan." }
                ]
            }
        },
        {
            id: "pos-26",
            biome: 4,
            postNum: "26",
            altitude: "2.630 mdpl",
            date: "20 Nov 2026",
            title: "Totalitas Recreate 5 Ekspresi Meme Kita",
            vignette: "camera-stars",
            pullQuote: "Lima pose ikonik: dari setengah hati vs jempol sampai doa penuh penghayatan.",
            lines: [
                "Malam 20 November mungkin salah satu sesi paling niat sepanjang sejarah kita kenalan: bikin ulang 5 ekspresi meme terkenal sekaligus dalam satu malam!"
            ],
            photos: [
                {
                    src: "assets/moment-meme-heart.jpg",
                    alt: "Recreate meme tangan setengah hati dibalas jempol",
                    caption: "20 Nov: Half-heart vs jempol"
                },
                {
                    src: "assets/moment-meme-hand.jpg",
                    alt: "Recreate meme berbicara pada layar ponsel sambil mengacungkan tangan",
                    caption: "20 Nov: Sibuk main HP"
                },
                {
                    src: "assets/moment-meme-cat.jpg",
                    alt: "Recreate meme singa teriak dan kucing",
                    caption: "20 Nov: Singa dan kucing"
                },
                {
                    src: "assets/moment-meme-monkey.jpg",
                    alt: "Recreate meme monyet kaget",
                    caption: "20 Nov: Monyet bengong"
                },
                {
                    src: "assets/moment-meme-pray.jpg",
                    alt: "Recreate meme dua orang menutup mata berdoa dan pasrah",
                    caption: "20 Nov: Doa penuh penghayatan"
                }
            ],
            quickGame: {
                prompt: "Selingan Pos 26 // Dari ke-5 recreate meme 20 November, juara akting jatuh ke:",
                options: [
                    { label: "Half-heart vs Jempol", reply: "Paling sering terjadi di dunia nyata nih posenya!" },
                    { label: "Singa, Monyet & Doa Pasrah", reply: "Ekspresinya dapet banget sampai bikin ngakak gak berhenti." }
                ]
            }
        },
        {
            id: "pos-27",
            biome: 4,
            postNum: "27",
            altitude: "2.700 mdpl",
            date: "21-27 Nov 2026",
            title: "Puncak 27 & Typo Legendaris: \"What This Is Cui\"",
            vignette: "summit-crown",
            pullQuote: "\"Manual, di kos ku gaada mesin cucu\" -> \"cui, what this is cui\".",
            lines: [
                "Di titik tertinggi Pos 27 menuju 27 November ini, kita tutup perjalanan panjang dari kamera FYP BINUS dengan satu typo paling legendaris yang bikin ketawa bareng."
            ],
            chats: [
                {
                    platform: "WhatsApp // Rara si bingung",
                    date: "21 Nov 2026",
                    prompt: "Inget gak typo hari ini sebelum puncak?",
                    messages: [
                        { from: "jay", text: "sumpah ini baju ku ga kejemur2 dari kemaren", time: "14:35" },
                        { from: "rara", text: "nyuci pake mesin cuci? ap manual", time: "14:36" },
                        { from: "jay", text: "manual, di kos ku gaada mesin cucu", time: "14:36" },
                        { from: "jay", text: "cui", time: "14:36" },
                        { from: "jay", text: "cuci", time: "14:36" },
                        { from: "rara", text: "cui", time: "14:37" },
                        { from: "rara", text: "what this is cui", time: "14:37" }
                    ]
                }
            ],
            footnote: "Dari canggung setengah mati di bulan Agustus sampai ketawa gara-gara 'mesin cucu'... selamat sampai di Puncak 27!",
            quickGame: {
                prompt: "Selingan Pos 27 // Predikat tertinggi buat typo sepanjang Agustus - November:",
                options: [
                    { label: "What this is cui (Juara 1)", reply: "Resmi dinobatkan menjadi kosakata penutup di Puncak 27!" },
                    { label: "Mesin cucu di kosan", reply: "Semoga habis ini bajunya cepet kering ya!" }
                ]
            },
            talkAfter: {
                badge: "BERHENTI SEJENAK #07 // MAHKOTA PUNCAK 27",
                teaser: "Penutup 27 Pos sebelum baca Surat Puncak 27 & sesi Photobooth Berdua!",
                question: "Kalau seluruh perjalanan 27 pos kita dari Agustus sampai hari ini dijadiin satu judul cerita fantasi atau film Ghibli, kira-kira judul apa yang paling cocok menurut kalian berdua?",
                hint: "Simpan judul kalian, lalu putar tantangan Puncak 27 sebelum berpose di photobooth!",
                miniGame: {
                    type: "roda-tantangan",
                    badge: "MINI GAME #07 // PUTAR TANTANGAN PUNCAK",
                    title: "Putar Tantangan Seru Berdua Sebelum Surat & Photobooth!",
                    desc: "Klik tombol putar untuk dapat 1 tantangan spontan buat kalian lakukan bareng hari ini.",
                    dares: [
                        "Bikin 1 pose recreate meme paling kocak langsung di Photobooth bawah nanti!",
                        "Sebutkan secara bergantian 1 hal yang paling bikin bersyukur bisa kenal sejak Agustus.",
                        "Pilih 1 judul film Studio Ghibli / fantasi buat jadwal nobar Discord terdekat!",
                        "Foto high-five atau half-heart vs jempol tepat setelah baca Surat Puncak 27!",
                        "Tulis kesan rahasia paling jujur di kolom Catatan Rara buat Kartu Rangkuman PNG!"
                    ]
                }
            }
        }
    ];

    const QUICK_FILL_PHOTOS = [
        "assets/moment-library-booth.jpg",
        "assets/moment-camera.jpg",
        "assets/moment-selfie-oct23.jpg",
        "assets/moment-mirror-oct31.jpg"
    ];

    const STRIP_PALETTES = {
        parchment: {
            bg: "#F6F0E3",
            card: "#FFFDF8",
            mat: "#FAF5E8",
            border: "#835811",
            foil: "#D8A84E",
            accent: "#1A4F3E",
            accentSoft: "#DFECE6",
            wax: "#8F2631",
            text: "#1C1821",
            muted: "#504754",
            stamp: "#8F2631"
        },
        lantern: {
            bg: "#FAF0E2",
            card: "#FFF9F0",
            mat: "#FBF3E4",
            border: "#8A3B1E",
            foil: "#D89B3C",
            accent: "#835811",
            accentSoft: "#F5E7D2",
            wax: "#8F2631",
            text: "#1C1821",
            muted: "#504754",
            stamp: "#8A3B1E"
        },
        berry: {
            bg: "#1D1426",
            card: "#291D35",
            mat: "#352645",
            border: "#C996BE",
            foil: "#F3D695",
            accent: "#F09BB0",
            accentSoft: "#3E2C4F",
            wax: "#BA3846",
            text: "#FAF6EE",
            muted: "#D9CBE4",
            stamp: "#EBC06B"
        },
        summit: {
            bg: "#0D1322",
            card: "#151D30",
            mat: "#1E2842",
            border: "#7E97C2",
            foil: "#F3D695",
            accent: "#EBC06B",
            accentSoft: "#22304D",
            wax: "#BA3846",
            text: "#F2ECE0",
            muted: "#C4CEE0",
            stamp: "#96C2F7"
        }
    };

    const LIGHTBOX_GALLERY = [];
    TRAIL_CHECKPOINTS.forEach((cp) => {
        if (Array.isArray(cp.photos)) {
            cp.photos.forEach((photo) => {
                LIGHTBOX_GALLERY.push({
                    src: photo.src,
                    alt: photo.alt,
                    title: cp.title,
                    meta: `POS ${cp.postNum} // ${cp.altitude} // ${cp.date}`,
                    caption: photo.caption
                });
            });
        }
    });

    const state = {
        theme: "light",
        quizStep: 0,
        quizAnswers: {},
        quizReactions: {},
        unlockedStamps: [],
        runawayAttempts: 0,
        ratingScore: 95,
        raraNote: "",
        shotCount: 3,
        timerSeconds: 3,
        stripTheme: "parchment",
        stripCaption: "Jay & Rara // Puncak 27",
        isMirrored: true,
        soundEnabled: true,
        photos: [null, null, null],
        compositeDataUrl: "",
        summaryDataUrl: "",
        cameraStatus: "idle",
        stream: null,
        videoDevices: [],
        activeDeviceId: null,
        isCapturing: false,
        captureAbortController: null,
        pendingSlotIndex: null,
        activeCardTab: "strip",
        audioContext: null,
        dialogGalleryIndex: -1,
        dialogPreviewTarget: null,
        lastFocusedBeforeDialog: null,
        trailTotalLength: 0,
        scrollRafPending: false,
        resizeTimer: null,
        activePosIndex: 0,
        currentBiome: 1,
        quickGameAnswers: {}
    };

    const el = {
        root: document.documentElement,
        worldAmbienceStage: document.getElementById("world-ambience-stage"),
        ambientWorldCanvas: document.getElementById("ambient-world-canvas"),
        basecamp: document.getElementById("basecamp"),
        jalurSection: document.getElementById("jalur"),
        starlightCanvas: document.getElementById("starlight-canvas"),
        navPills: document.querySelectorAll(".nav-pill"),
        sections: ["basecamp", "kuis", "jalur", "puncak", "photobooth"]
            .map((id) => document.getElementById(id))
            .filter(Boolean),
        elevationReadout: document.getElementById("elevation-readout"),
        scrollProgressBar: document.getElementById("scroll-progress-bar"),
        openHandoffBtn: document.getElementById("openHandoffBtn"),
        handoffBanner: document.getElementById("handoff-banner"),
        waSelfBtn: document.getElementById("waSelfBtn"),
        copyUrlBtn: document.getElementById("copyUrlBtn"),
        dismissHandoffBtn: document.getElementById("dismissHandoffBtn"),
        handoffFeedback: document.getElementById("handoffFeedback"),
        themeToggle: document.getElementById("themeToggle"),
        themeToggleLabel: document.getElementById("themeToggleLabel"),
        quizStepLabel: document.getElementById("quizStepLabel"),
        quizProgressMeter: document.getElementById("quizProgressMeter"),
        quizProgressFill: document.getElementById("quizProgressFill"),
        quizStepContainer: document.getElementById("quizStepContainer"),
        prevQuizBtn: document.getElementById("prevQuizBtn"),
        resetQuizBtn: document.getElementById("resetQuizBtn"),
        nextQuizBtn: document.getElementById("nextQuizBtn"),
        passportCountLabel: document.getElementById("passportCountLabel"),
        stampChips: document.querySelectorAll("#passport-stamps .stamp-chip"),
        puncakStampsStatus: document.getElementById("puncak-stamps-status"),
        trailCanvas: document.getElementById("trail-canvas"),
        trailSvg: document.getElementById("trail-svg"),
        trailBiomeGrad: document.getElementById("trail-biome-grad"),
        trailPathGuide: document.getElementById("trail-path-guide"),
        trailPathActive: document.getElementById("trail-path-active"),
        checkpointList: document.getElementById("checkpoint-list"),
        letterSavedSummary: document.getElementById("letterSavedSummary"),
        cameraStatus: document.getElementById("cameraStatus"),
        cameraStatusText: document.getElementById("cameraStatusText"),
        cameraVideo: document.getElementById("cameraVideo"),
        shootBanner: document.getElementById("shootBanner"),
        shootBannerText: document.getElementById("shootBannerText"),
        countdownOverlay: document.getElementById("countdownOverlay"),
        countdownNumber: document.getElementById("countdownNumber"),
        flashOverlay: document.getElementById("flashOverlay"),
        cameraStatePanel: document.getElementById("cameraStatePanel"),
        cameraStateTitle: document.getElementById("cameraStateTitle"),
        cameraStateMessage: document.getElementById("cameraStateMessage"),
        startCameraBtn: document.getElementById("startCameraBtn"),
        uploadFallbackBtn: document.getElementById("uploadFallbackBtn"),
        manualFileInput: document.getElementById("manualFileInput"),
        shutterBtn: document.getElementById("shutterBtn"),
        shutterBtnLabel: document.getElementById("shutterBtnLabel"),
        fillFromMomentsBtn: document.getElementById("fillFromMomentsBtn"),
        switchCameraBtn: document.getElementById("switchCameraBtn"),
        shutterHint: document.getElementById("shutterHint"),
        shotRadios: document.querySelectorAll('input[name="shotCount"]'),
        timerRadios: document.querySelectorAll('input[name="timerSeconds"]'),
        themeRadios: document.querySelectorAll('input[name="stripTheme"]'),
        mirrorToggle: document.getElementById("mirrorToggle"),
        soundToggle: document.getElementById("soundToggle"),
        stripCaptionInput: document.getElementById("stripCaptionInput"),
        slotCounter: document.getElementById("slotCounter"),
        tabStripCard: document.getElementById("tabStripCard"),
        tabSummaryCard: document.getElementById("tabSummaryCard"),
        stripPanelView: document.getElementById("stripPanelView"),
        summaryPanelView: document.getElementById("summaryPanelView"),
        stripCode: document.getElementById("stripCode"),
        stripSlots: document.getElementById("stripSlots"),
        stripCanvas: document.getElementById("strip-canvas"),
        summaryCanvas: document.getElementById("summary-canvas"),
        stripEmptyNote: document.getElementById("stripEmptyNote"),
        downloadBtn: document.getElementById("downloadBtn"),
        previewBtn: document.getElementById("previewBtn"),
        resetBtn: document.getElementById("resetBtn"),
        actionFeedback: document.getElementById("actionFeedback"),
        summaryPreviewBody: document.getElementById("summaryPreviewBody"),
        downloadSummaryBtn: document.getElementById("downloadSummaryBtn"),
        previewSummaryBtn: document.getElementById("previewSummaryBtn"),
        shareWaSummaryBtn: document.getElementById("shareWaSummaryBtn"),
        summaryFeedback: document.getElementById("summaryFeedback"),
        lightboxDialog: document.getElementById("lightbox-dialog"),
        dialogMetaTag: document.getElementById("dialogMetaTag"),
        previewDialogTitle: document.getElementById("previewDialogTitle"),
        previewImage: document.getElementById("previewImage"),
        previewCaption: document.getElementById("previewCaption"),
        dialogNavGroup: document.getElementById("dialogNavGroup"),
        dialogPrevBtn: document.getElementById("dialogPrevBtn"),
        dialogNextBtn: document.getElementById("dialogNextBtn"),
        dialogDownloadBtn: document.getElementById("dialogDownloadBtn"),
        dialogCloseTop: document.getElementById("dialogCloseTop"),
        dialogCloseBottom: document.getElementById("dialogCloseBottom"),
        storyStepperDock: document.getElementById("story-stepper-dock"),
        stepPrevPosBtn: document.getElementById("stepPrevPosBtn"),
        stepperPosLabel: document.getElementById("stepperPosLabel"),
        stepNextPosBtn: document.getElementById("stepNextPosBtn")
    };

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const AMBIENT_BIOME_TONES = {
        1: { light: ["26, 79, 62", "180, 126, 36"], dark: ["126, 212, 189", "243, 214, 149"] },
        2: { light: ["138, 59, 30", "198, 122, 24"], dark: ["248, 200, 122", "235, 192, 107"] },
        3: { light: ["91, 44, 82", "180, 126, 36"], dark: ["240, 155, 176", "243, 214, 149"] },
        4: { light: ["31, 59, 102", "180, 126, 36"], dark: ["150, 194, 247", "250, 246, 238"] }
    };

    /**
     * Renders biome-adaptive fireflies, drifting leaves/petals, and starlight across the page backdrop.
     */
    function initAmbientWorldCanvas() {
        const canvas = el.ambientWorldCanvas;
        if (!canvas || reducedMotionQuery.matches) {
            return;
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        let width = 0;
        let height = 0;
        const motes = Array.from({ length: 48 }, (_, idx) => ({
            x: (idx * 79) % 1000,
            y: (idx * 131) % 1000,
            vx: ((idx % 5) - 2) * 0.14,
            vy: -0.18 - (idx % 4) * 0.08,
            radius: 1.5 + (idx % 3) * 0.9,
            phase: idx * 0.55,
            isStar: idx % 4 === 0,
            toneIdx: idx % 2
        }));

        function resizeAmbient() {
            width = Math.max(320, window.innerWidth);
            height = Math.max(400, window.innerHeight);
            canvas.width = width;
            canvas.height = height;
        }

        function drawAmbientFrame() {
            const isDark = state.theme === "dark";
            const biomeTones = AMBIENT_BIOME_TONES[state.currentBiome] || AMBIENT_BIOME_TONES[1];
            const palettePair = isDark ? biomeTones.dark : biomeTones.light;

            ctx.clearRect(0, 0, width, height);
            motes.forEach((m) => {
                m.x = (m.x + m.vx + width) % width;
                m.y = (m.y + m.vy + height) % height;
                m.phase += 0.025;
                const pulse = 0.45 + 0.55 * Math.sin(m.phase);
                const alpha = (isDark ? 0.48 : 0.4) * pulse;
                const color = palettePair[m.toneIdx] || palettePair[0];

                if (m.isStar) {
                    drawFourPointStar(ctx, m.x, m.y, m.radius * 2.5, `rgba(${color}, 1)`, alpha);
                } else {
                    ctx.beginPath();
                    ctx.arc(m.x, m.y, m.radius * 2.3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${color}, ${(alpha * 0.34).toFixed(3)})`;
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
                    ctx.fill();
                }
            });
            window.requestAnimationFrame(drawAmbientFrame);
        }

        resizeAmbient();
        window.addEventListener("resize", resizeAmbient);
        window.requestAnimationFrame(drawAmbientFrame);
    }

    /**
     * Renders multi-tone glowing firefly starlight inside hero and pauses when offscreen.
     */
    function initHeroStarlight() {
        const canvas = el.starlightCanvas;
        if (!canvas || reducedMotionQuery.matches) {
            return;
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        let width = 0;
        let height = 0;
        let isVisible = true;
        let rafId = null;
        let pointerX = -9999;
        let pointerY = -9999;

        const tones = ["248, 200, 122", "250, 246, 238", "240, 155, 176"];
        const particles = Array.from({ length: 56 }, (_, idx) => ({
            xRatio: ((idx * 37 + 11) % 100) / 100,
            yRatio: ((idx * 53 + 7) % 100) / 100,
            vx: ((idx % 5) - 2) * 0.08,
            vy: -0.15 - (idx % 4) * 0.06,
            radius: 1.2 + (idx % 3) * 0.7,
            alpha: 0.35 + (idx % 5) * 0.11,
            rgb: tones[idx % tones.length]
        }));

        function resizeCanvas() {
            const rect = el.basecamp.getBoundingClientRect();
            width = Math.max(300, Math.floor(rect.width));
            height = Math.max(320, Math.floor(rect.height));
            canvas.width = width;
            canvas.height = height;
        }

        function tick() {
            if (!isVisible) {
                rafId = null;
                return;
            }
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => {
                let px = p.xRatio * width + p.vx;
                let py = p.yRatio * height + p.vy;

                const dx = px - pointerX;
                const dy = py - pointerY;
                const dist = Math.hypot(dx, dy);
                if (dist > 0 && dist < 120) {
                    px += (dx / dist) * 1.05;
                    py += (dy / dist) * 1.05;
                }

                if (py < -10) py = height + 8;
                if (px < -10) px = width + 8;
                if (px > width + 10) px = -8;

                p.xRatio = px / width;
                p.yRatio = py / height;

                ctx.beginPath();
                ctx.arc(px, py, p.radius * 2.4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.rgb}, ${(p.alpha * 0.24).toFixed(2)})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(px, py, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.rgb}, ${p.alpha.toFixed(2)})`;
                ctx.fill();
            });
            rafId = window.requestAnimationFrame(tick);
        }

        el.basecamp.addEventListener(
            "pointermove",
            (evt) => {
                const rect = el.basecamp.getBoundingClientRect();
                pointerX = evt.clientX - rect.left;
                pointerY = evt.clientY - rect.top;
            },
            { passive: true }
        );
        el.basecamp.addEventListener("pointerleave", () => {
            pointerX = -9999;
            pointerY = -9999;
        });

        const visObserver = new IntersectionObserver(
            (entries) => {
                isVisible = Boolean(entries[0] && entries[0].isIntersecting);
                if (isVisible && !rafId) {
                    rafId = window.requestAnimationFrame(tick);
                }
            },
            { threshold: 0.02 }
        );

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        visObserver.observe(el.basecamp);
        rafId = window.requestAnimationFrame(tick);
    }

    function applyTheme(theme, persist = true) {
        state.theme = theme === "dark" ? "dark" : "light";
        el.root.setAttribute("data-theme", state.theme);
        const isDark = state.theme === "dark";
        el.themeToggle.setAttribute("aria-pressed", String(isDark));
        el.themeToggleLabel.textContent = isDark ? "Siang" : "Malam";
        if (persist) {
            try {
                localStorage.setItem(STORAGE_THEME_KEY, state.theme);
            } catch (_) {
                // Storage may be restricted.
            }
        }
    }

    function loadSavedState() {
        try {
            const savedTheme = localStorage.getItem(STORAGE_THEME_KEY);
            applyTheme(savedTheme === "dark" ? "dark" : "light", false);
        } catch (_) {
            applyTheme("light", false);
        }

        try {
            const raw = localStorage.getItem(STORAGE_QUIZ_KEY);
            if (!raw) {
                return;
            }
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
                if (parsed.quizAnswers && typeof parsed.quizAnswers === "object") {
                    state.quizAnswers = parsed.quizAnswers;
                }
                if (parsed.quizReactions && typeof parsed.quizReactions === "object") {
                    state.quizReactions = parsed.quizReactions;
                }
                if (Array.isArray(parsed.unlockedStamps)) {
                    state.unlockedStamps = parsed.unlockedStamps;
                }
                if (typeof parsed.ratingScore === "number") {
                    state.ratingScore = Math.max(1, Math.min(100, parsed.ratingScore));
                }
                if (typeof parsed.raraNote === "string") {
                    state.raraNote = parsed.raraNote;
                }
            }
        } catch (_) {
            // Keep clean defaults.
        }
    }

    function saveQuizState() {
        try {
            localStorage.setItem(
                STORAGE_QUIZ_KEY,
                JSON.stringify({
                    quizAnswers: state.quizAnswers,
                    quizReactions: state.quizReactions,
                    unlockedStamps: state.unlockedStamps,
                    ratingScore: state.ratingScore,
                    raraNote: state.raraNote
                })
            );
        } catch (_) {
            // Ignore restricted storage.
        }
    }

    function renderPassportStamps() {
        const count = state.unlockedStamps.length;
        el.passportCountLabel.textContent = `KOLEKSI STEMPEL (${count} / 6):`;
        el.stampChips.forEach((chip) => {
            const unlocked = state.unlockedStamps.includes(chip.dataset.stamp);
            chip.classList.toggle("is-unlocked", unlocked);
        });
        if (el.puncakStampsStatus) {
            el.puncakStampsStatus.textContent =
                count === 6
                    ? "Semua 6 Stempel Ekspedisi lengkap terkumpul (FYP, Lembah, Lentera, Bidadari, Bintang, Puncak 27)!"
                    : `Stempel Ekspedisi terkumpul: ${count} / 6.`;
        }
    }

    function unlockStamp(stampId) {
        if (!stampId || state.unlockedStamps.includes(stampId)) {
            return;
        }
        state.unlockedStamps.push(stampId);
        saveQuizState();
        renderPassportStamps();
    }

    function initHandoffVisibility() {
        let dismissed = false;
        try {
            dismissed = sessionStorage.getItem(SESSION_HANDOFF_KEY) === "1";
        } catch (_) {
            dismissed = false;
        }
        const shouldShow = window.innerWidth < 860 && !dismissed;
        el.handoffBanner.hidden = !shouldShow;
        el.openHandoffBtn.setAttribute("aria-expanded", String(shouldShow));
    }

    function getScoreDescriptor(score) {
        if (score >= 100) {
            return "Setara nilai matkul deeptalk & Spotify Blend 100%!";
        }
        if (score >= 85) {
            return "Seru maksimal, tinggal eksekusi agenda muncak!";
        }
        if (score >= 60) {
            return "Asyik banget buat diajak diskusi dan nyari mie bareng";
        }
        return "Masih ada banyak ruang buat cerita baru nanti";
    }

    function renderQuizStep() {
        const step = QUIZ_STEPS[state.quizStep];
        const total = QUIZ_STEPS.length;
        const pct = Math.round(((state.quizStep + 1) / total) * 100);

        el.quizStepLabel.textContent = `LANGKAH ${String(state.quizStep + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
        el.quizProgressMeter.setAttribute("aria-valuenow", String(state.quizStep + 1));
        el.quizProgressFill.style.width = `${pct}%`;

        el.prevQuizBtn.disabled = state.quizStep === 0;
        el.resetQuizBtn.hidden = Object.keys(state.quizAnswers).length === 0 && !state.raraNote;
        el.nextQuizBtn.textContent = state.quizStep === total - 1 ? "Simpan Jawaban & Mulai Naik" : "Lanjut";

        const wrapper = document.createElement("div");
        wrapper.className = step.evidenceImg ? "quiz-layout" : "quiz-layout quiz-layout--single";

        const mainCol = document.createElement("div");
        const ey = document.createElement("p");
        ey.className = "eyebrow";
        ey.textContent = step.eyebrow;

        const qEl = document.createElement("h3");
        qEl.className = "quiz-question";
        qEl.textContent = step.question;
        mainCol.append(ey, qEl);

        const reactionBox = document.createElement("div");
        reactionBox.className = "quiz-reaction-box";
        const savedReaction = state.quizReactions[step.id] || "";
        reactionBox.hidden = !savedReaction;
        reactionBox.textContent = savedReaction;

        if (step.type === "choice" || step.type === "runaway") {
            const optGroup = document.createElement("div");
            optGroup.className = "quiz-options";

            step.options.forEach((opt) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "quiz-option-btn";
                btn.textContent = opt.label;
                if (state.quizAnswers[step.id] === opt.label) {
                    btn.classList.add("is-selected");
                }
                btn.addEventListener("click", () => {
                    state.quizAnswers[step.id] = opt.label;
                    state.quizReactions[step.id] = opt.reaction;
                    unlockStamp("fyp");
                    saveQuizState();
                    updateLetterAndSummaryPreview();
                    renderQuizStep();
                });
                optGroup.appendChild(btn);
            });
            mainCol.appendChild(optGroup);

            if (step.type === "runaway") {
                const arena = document.createElement("div");
                arena.className = "runaway-arena";

                const dodgeBtn = document.createElement("button");
                dodgeBtn.type = "button";
                dodgeBtn.className = "btn-runaway";
                const stageIdx = Math.min(state.runawayAttempts, step.runawayStages.length - 1);
                dodgeBtn.textContent = step.runawayStages[stageIdx];

                const moveDodgeBtn = () => {
                    if (state.runawayAttempts >= 4) {
                        return;
                    }
                    state.runawayAttempts += 1;
                    dodgeBtn.textContent = step.runawayStages[Math.min(state.runawayAttempts, step.runawayStages.length - 1)];
                    const maxShiftX = Math.max(0, arena.clientWidth - dodgeBtn.offsetWidth - 24);
                    const rawX = state.runawayAttempts % 2 === 1 ? Math.min(maxShiftX, 180) : 16;
                    const xOffset = Math.max(0, Math.min(maxShiftX, rawX));
                    const yOffset = state.runawayAttempts % 2 === 1 ? 10 : -8;
                    dodgeBtn.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
                };

                dodgeBtn.addEventListener("pointerenter", (evt) => {
                    if (evt.pointerType === "mouse") {
                        moveDodgeBtn();
                    }
                });
                dodgeBtn.addEventListener("click", () => {
                    if (state.runawayAttempts < 4) {
                        moveDodgeBtn();
                        return;
                    }
                    state.quizAnswers[step.id] = step.runawayStages[step.runawayStages.length - 1];
                    state.quizReactions[step.id] = step.runawayFinalReaction;
                    unlockStamp("fyp");
                    dodgeBtn.style.transform = "translate(0, 0)";
                    saveQuizState();
                    updateLetterAndSummaryPreview();
                    renderQuizStep();
                });

                arena.appendChild(dodgeBtn);
                mainCol.appendChild(arena);
            }

            mainCol.appendChild(reactionBox);
        } else if (step.type === "rating") {
            const panel = document.createElement("div");
            panel.className = "rating-panel";

            const readoutRow = document.createElement("div");
            readoutRow.className = "rating-readout-row";

            const scoreDisplay = document.createElement("span");
            scoreDisplay.className = "rating-number";
            scoreDisplay.textContent = `${state.ratingScore} / 100`;

            const descDisplay = document.createElement("span");
            descDisplay.className = "rating-descriptor";
            descDisplay.textContent = getScoreDescriptor(state.ratingScore);
            readoutRow.append(scoreDisplay, descDisplay);

            const rangeLabel = document.createElement("label");
            rangeLabel.className = "control-label";
            rangeLabel.htmlFor = "friendshipRatingRange";
            rangeLabel.textContent = "Geser nilai pertemanan (1 sampai 100)";

            const slider = document.createElement("input");
            slider.type = "range";
            slider.id = "friendshipRatingRange";
            slider.className = "rating-range";
            slider.min = "1";
            slider.max = "100";
            slider.value = String(state.ratingScore);
            slider.addEventListener("input", () => {
                state.ratingScore = Number(slider.value);
                state.quizAnswers["step-rating-note"] = `${state.ratingScore}/100`;
                unlockStamp("fyp");
                scoreDisplay.textContent = `${state.ratingScore} / 100`;
                descDisplay.textContent = getScoreDescriptor(state.ratingScore);
                saveQuizState();
                updateLetterAndSummaryPreview();
            });

            const noteLabel = document.createElement("label");
            noteLabel.className = "control-label";
            noteLabel.htmlFor = "raraPersonalNote";
            noteLabel.textContent = "Catatan kecil dari Rara buat masuk ke Kartu Rangkuman (opsional)";

            const textarea = document.createElement("textarea");
            textarea.id = "raraPersonalNote";
            textarea.className = "note-textarea";
            textarea.placeholder = "Tulis kesan singkat atau pesan apa saja di sini...";
            textarea.value = state.raraNote;
            textarea.addEventListener("input", () => {
                state.raraNote = textarea.value;
                saveQuizState();
                updateLetterAndSummaryPreview();
            });

            panel.append(readoutRow, rangeLabel, slider, noteLabel, textarea);
            mainCol.appendChild(panel);
        }

        wrapper.appendChild(mainCol);

        if (step.evidenceImg) {
            const evBox = document.createElement("div");
            evBox.className = "quiz-evidence";

            const evBtn = document.createElement("button");
            evBtn.type = "button";
            evBtn.className = "quiz-evidence-btn";
            evBtn.setAttribute("aria-label", `Perbesar bukti foto: ${step.evidenceCaption}`);

            const evImg = document.createElement("img");
            evImg.src = step.evidenceImg;
            evImg.alt = step.evidenceCaption;
            evBtn.appendChild(evImg);
            evBtn.addEventListener("click", () => {
                const idx = LIGHTBOX_GALLERY.findIndex((item) => item.src === step.evidenceImg);
                openImageLightbox(step.evidenceImg, step.eyebrow, step.evidenceCaption, null, idx);
            });

            const evCap = document.createElement("p");
            evCap.className = "quiz-evidence-cap";
            evCap.textContent = step.evidenceCaption;
            evBox.append(evBtn, evCap);
            wrapper.appendChild(evBox);
        }

        el.quizStepContainer.replaceChildren(wrapper);
    }

    function createBiomeBanner(biomeId) {
        const meta = BIOME_META[biomeId];
        if (!meta) {
            return null;
        }
        const li = document.createElement("li");
        li.className = `biome-banner-item biome-${biomeId}`;

        const banner = document.createElement("div");
        banner.className = "biome-banner reveal-group";

        const art = document.createElement("div");
        art.className = "biome-banner-art";
        art.setAttribute("aria-hidden", "true");
        art.innerHTML = meta.svg;

        const kicker = document.createElement("p");
        kicker.className = "biome-kicker reveal-line";
        kicker.style.setProperty("--line-index", "0");
        kicker.textContent = meta.kicker;

        const title = document.createElement("h3");
        title.className = "biome-title reveal-line";
        title.style.setProperty("--line-index", "1");
        title.textContent = meta.title;

        const sub = document.createElement("p");
        sub.className = "biome-subtitle reveal-line";
        sub.style.setProperty("--line-index", "2");
        sub.textContent = meta.subtitle;

        banner.append(art, kicker, title, sub);
        li.appendChild(banner);
        return li;
    }

    /**
     * Builds the compact 1-tap selingan mini-game attached to each checkpoint card.
     */
    function createPosQuickGame(cp) {
        const qg = cp.quickGame;
        if (!qg || !Array.isArray(qg.options) || qg.options.length === 0) {
            return null;
        }
        const box = document.createElement("div");
        box.className = "pos-selingan-box";

        const kicker = document.createElement("p");
        kicker.className = "selingan-kicker";
        kicker.textContent = `MINI SELINGAN // POS ${cp.postNum}`;

        const prompt = document.createElement("p");
        prompt.className = "selingan-prompt";
        prompt.textContent = qg.prompt;

        const choicesRow = document.createElement("div");
        choicesRow.className = "selingan-choices";

        const resultBox = document.createElement("p");
        resultBox.className = "selingan-result";
        resultBox.hidden = true;

        qg.options.forEach((opt) => {
            const optBtn = document.createElement("button");
            optBtn.type = "button";
            optBtn.className = "btn-selingan";
            optBtn.textContent = opt.label;
            optBtn.addEventListener("click", () => {
                choicesRow.querySelectorAll(".btn-selingan").forEach((b) => b.classList.remove("is-picked"));
                optBtn.classList.add("is-picked");
                state.quickGameAnswers[cp.id] = opt.label;
                resultBox.textContent = opt.reply;
                resultBox.hidden = false;
                scheduleTrailGeometryUpdate();
            });
            choicesRow.appendChild(optBtn);
        });

        box.append(kicker, prompt, choicesRow, resultBox);
        return box;
    }

    function normalizeGameRounds(game) {
        if (game.type === "tebak-chat" && Array.isArray(game.items)) {
            return game.items.map((item) => ({
                promptText: item.quote,
                choices: ["Jay", "Rara"],
                correctAnswer: item.answer
            }));
        }
        if (game.type === "tebak-jam" && Array.isArray(game.rounds)) {
            return game.rounds.map((r) => ({
                promptText: r.label,
                choices: r.choices,
                correctAnswer: r.correct
            }));
        }
        if (game.type === "susun-typo" && Array.isArray(game.puzzles)) {
            return game.puzzles.map((p) => ({
                promptText: p.prefix,
                choices: p.choices,
                correctAnswer: p.answer
            }));
        }
        return [];
    }

    function buildRoundMiniGame(game, stage, scoreEl) {
        const rounds = normalizeGameRounds(game);
        let roundIdx = 0;
        let score = 0;

        function renderRound() {
            stage.replaceChildren();
            if (roundIdx >= rounds.length) {
                scoreEl.textContent = `Skor Akhir: ${score} / ${rounds.length}`;
                const done = document.createElement("p");
                done.className = "minigame-feedback";
                done.textContent =
                    score === rounds.length
                        ? `Kompak maksimal! Skor sempurna ${score} / ${rounds.length}.`
                        : `Skor kalian ${score} / ${rounds.length}. Lumayan banget buat kenang-kenangan!`;

                const retryBtn = document.createElement("button");
                retryBtn.type = "button";
                retryBtn.className = "minigame-btn";
                retryBtn.textContent = "Main Lagi";
                retryBtn.addEventListener("click", () => {
                    roundIdx = 0;
                    score = 0;
                    renderRound();
                    scheduleTrailGeometryUpdate();
                });

                stage.append(done, retryBtn);
                return;
            }

            const cur = rounds[roundIdx];
            scoreEl.textContent = `Ronde ${roundIdx + 1} / ${rounds.length} | Skor: ${score}`;

            const qCard = document.createElement("div");
            qCard.className = "minigame-quote-card";
            qCard.textContent = cur.promptText;

            const actions = document.createElement("div");
            actions.className = "minigame-actions";

            const fb = document.createElement("p");
            fb.className = "minigame-feedback";
            fb.hidden = true;

            const nextBtn = document.createElement("button");
            nextBtn.type = "button";
            nextBtn.className = "minigame-btn is-active";
            nextBtn.textContent = roundIdx === rounds.length - 1 ? "Lihat Skor Akhir" : "Lanjut Ronde Berikutnya";
            nextBtn.hidden = true;

            let answered = false;
            cur.choices.forEach((choice) => {
                const cBtn = document.createElement("button");
                cBtn.type = "button";
                cBtn.className = "minigame-btn";
                cBtn.textContent = choice;
                cBtn.addEventListener("click", () => {
                    if (answered) {
                        return;
                    }
                    answered = true;
                    const isRight = choice === cur.correctAnswer;
                    if (isRight) {
                        score += 1;
                    }
                    cBtn.classList.add("is-active");
                    actions.querySelectorAll(".minigame-btn").forEach((b) => {
                        b.disabled = true;
                    });
                    fb.textContent = isRight
                        ? `Tepat! Jawabannya memang ${cur.correctAnswer}.`
                        : `Hampir! Jawaban tepatnya: ${cur.correctAnswer}.`;
                    fb.hidden = false;
                    nextBtn.hidden = false;
                    scoreEl.textContent = `Ronde ${roundIdx + 1} / ${rounds.length} | Skor: ${score}`;
                    scheduleTrailGeometryUpdate();
                });
                actions.appendChild(cBtn);
            });

            nextBtn.addEventListener("click", () => {
                roundIdx += 1;
                renderRound();
                scheduleTrailGeometryUpdate();
            });

            stage.append(qCard, actions, fb, nextBtn);
        }

        renderRound();
    }

    function buildSuitMiniGame(stage, scoreEl) {
        const moves = ["Batu Gunung", "Gunting Ranting", "Kertas Peta"];
        const beats = {
            "Batu Gunung": "Gunting Ranting",
            "Gunting Ranting": "Kertas Peta",
            "Kertas Peta": "Batu Gunung"
        };
        let wins = 0;
        let plays = 0;

        const actions = document.createElement("div");
        actions.className = "minigame-actions";
        const fb = document.createElement("p");
        fb.className = "minigame-feedback";
        fb.textContent = "Pilih jagoanmu dulu buat mulai ronde suit!";

        scoreEl.textContent = "Menang: 0 / 0";

        moves.forEach((move) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "minigame-btn";
            btn.textContent = move;
            btn.addEventListener("click", () => {
                const opp = moves[Math.floor(Math.random() * moves.length)];
                plays += 1;
                actions.querySelectorAll(".minigame-btn").forEach((b) => b.classList.remove("is-active"));
                btn.classList.add("is-active");

                if (move === opp) {
                    fb.textContent = `Seri! Sama-sama pilih ${move}. Ulangi lagi biar ketauan siapa bawa logistik!`;
                } else if (beats[move] === opp) {
                    wins += 1;
                    fb.textContent = `Menang! ${move} mengalahkan ${opp}. Jay kebagian bawain air minum ya!`;
                } else {
                    fb.textContent = `Kalah tipis! ${opp} mengalahkan ${move}. Rara siap-siap traktir es di pos depan ya!`;
                }
                scoreEl.textContent = `Menang: ${wins} / ${plays}`;
                scheduleTrailGeometryUpdate();
            });
            actions.appendChild(btn);
        });

        stage.append(actions, fb);
    }

    function buildLanternMiniGame(game, stage, scoreEl) {
        const grid = document.createElement("div");
        grid.className = "lantern-grid";
        const litSet = new Set();

        const fb = document.createElement("p");
        fb.className = "minigame-feedback";
        fb.textContent = "Klik ke-5 lentera untuk membuka kata kunci Hutan Lentera.";

        scoreEl.textContent = `Menyala: 0 / ${game.lanterns.length}`;

        game.lanterns.forEach((word, idx) => {
            const lBtn = document.createElement("button");
            lBtn.type = "button";
            lBtn.className = "lantern-node-btn";
            lBtn.textContent = `Lentera ${String(idx + 1).padStart(2, "0")}`;
            lBtn.addEventListener("click", () => {
                if (!litSet.has(idx)) {
                    litSet.add(idx);
                    lBtn.classList.add("is-lit");
                    lBtn.textContent = word;
                }
                scoreEl.textContent = `Menyala: ${litSet.size} / ${game.lanterns.length}`;
                fb.textContent =
                    litSet.size === game.lanterns.length
                        ? "Semua 5 Lentera Hutan menyala terang! Babak selanjutnya siap dimulai."
                        : `Lentera #${idx + 1} menyala (${word}). Nyalakan ${game.lanterns.length - litSet.size} lagi!`;
                scheduleTrailGeometryUpdate();
            });
            grid.appendChild(lBtn);
        });

        stage.append(grid, fb);
    }

    function buildTelepathyMiniGame(game, stage, scoreEl) {
        let idx = 0;
        let matchCount = 0;

        function renderPrompt() {
            stage.replaceChildren();
            if (idx >= game.prompts.length) {
                scoreEl.textContent = `Telepati: ${matchCount} / ${game.prompts.length}`;
                const fb = document.createElement("p");
                fb.className = "minigame-feedback";
                fb.textContent =
                    matchCount === game.prompts.length
                        ? "Telepati 100% tembus, persis kayak Spotify Blend kita!"
                        : `Skor telepati ${matchCount} / ${game.prompts.length}! Tetep seru walau jawabannya beda.`;
                const retryBtn = document.createElement("button");
                retryBtn.type = "button";
                retryBtn.className = "minigame-btn";
                retryBtn.textContent = "Ulangi Tes";
                retryBtn.addEventListener("click", () => {
                    idx = 0;
                    matchCount = 0;
                    renderPrompt();
                    scheduleTrailGeometryUpdate();
                });
                stage.append(fb, retryBtn);
                return;
            }

            scoreEl.textContent = `Tema ${idx + 1} / ${game.prompts.length} | Kompak: ${matchCount}`;
            const card = document.createElement("div");
            card.className = "minigame-quote-card";
            card.textContent = game.prompts[idx];

            const actions = document.createElement("div");
            actions.className = "minigame-actions";

            const sameBtn = document.createElement("button");
            sameBtn.type = "button";
            sameBtn.className = "minigame-btn is-active";
            sameBtn.textContent = "Kompak Sama! (+1)";
            sameBtn.addEventListener("click", () => {
                matchCount += 1;
                idx += 1;
                renderPrompt();
                scheduleTrailGeometryUpdate();
            });

            const diffBtn = document.createElement("button");
            diffBtn.type = "button";
            diffBtn.className = "minigame-btn";
            diffBtn.textContent = "Beda Jawaban";
            diffBtn.addEventListener("click", () => {
                idx += 1;
                renderPrompt();
                scheduleTrailGeometryUpdate();
            });

            actions.append(sameBtn, diffBtn);
            stage.append(card, actions);
        }

        renderPrompt();
    }

    function buildWheelMiniGame(game, stage, scoreEl) {
        let spins = 0;
        let lastIdx = -1;

        scoreEl.textContent = "Putaran: 0";
        const spinBtn = document.createElement("button");
        spinBtn.type = "button";
        spinBtn.className = "minigame-btn is-active";
        spinBtn.textContent = "Putar Tantangan Puncak 27!";

        const fb = document.createElement("p");
        fb.className = "minigame-feedback";
        fb.textContent = "Klik tombol di atas buat dapet tantangan spontan sebelum ke Photobooth!";

        spinBtn.addEventListener("click", () => {
            let pick = Math.floor(Math.random() * game.dares.length);
            if (game.dares.length > 1 && pick === lastIdx) {
                pick = (pick + 1) % game.dares.length;
            }
            lastIdx = pick;
            spins += 1;
            scoreEl.textContent = `Putaran: ${spins}`;
            fb.textContent = `Tantangan Terpilih: ${game.dares[pick]}`;
            scheduleTrailGeometryUpdate();
        });

        stage.append(spinBtn, fb);
    }

    /**
     * Renders the playful interactive mini-game embedded inside each rest-stop card.
     */
    function createTalkMiniGame(game) {
        if (!game) {
            return null;
        }
        const wrap = document.createElement("div");
        wrap.className = "talk-minigame";

        const head = document.createElement("div");
        head.className = "minigame-head";
        const badge = document.createElement("span");
        badge.className = "minigame-badge";
        badge.textContent = game.badge;
        const scoreEl = document.createElement("span");
        scoreEl.className = "minigame-score";
        head.append(badge, scoreEl);

        const title = document.createElement("h4");
        title.className = "minigame-title";
        title.textContent = game.title;

        const desc = document.createElement("p");
        desc.className = "minigame-desc";
        desc.textContent = game.desc;

        const stage = document.createElement("div");
        stage.className = "minigame-stage";

        if (game.type === "tebak-chat" || game.type === "tebak-jam" || game.type === "susun-typo") {
            buildRoundMiniGame(game, stage, scoreEl);
        } else if (game.type === "suit-pendaki") {
            buildSuitMiniGame(stage, scoreEl);
        } else if (game.type === "lentera-hutan") {
            buildLanternMiniGame(game, stage, scoreEl);
        } else if (game.type === "kompak-123") {
            buildTelepathyMiniGame(game, stage, scoreEl);
        } else if (game.type === "roda-tantangan") {
            buildWheelMiniGame(game, stage, scoreEl);
        }

        wrap.append(head, title, desc, stage);
        return wrap;
    }

    function createTalkCardItem(talk, biomeId) {
        const li = document.createElement("li");
        li.className = `talk-card-item biome-${biomeId}`;

        const card = document.createElement("div");
        card.className = "talk-card";

        const badge = document.createElement("span");
        badge.className = "talk-badge";
        badge.textContent = talk.badge;

        const teaser = document.createElement("p");
        teaser.className = "talk-teaser";
        teaser.textContent = talk.teaser;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn-talk-reveal";
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Buka Topik Obrolan";

        const panel = document.createElement("div");
        panel.className = "talk-prompt-panel";
        panel.hidden = true;

        const q = document.createElement("p");
        q.className = "talk-prompt-question";
        q.textContent = talk.question;

        const hint = document.createElement("p");
        hint.className = "talk-prompt-hint";
        hint.textContent = talk.hint;

        panel.append(q, hint);

        btn.addEventListener("click", () => {
            const opening = panel.hidden;
            panel.hidden = !opening;
            btn.setAttribute("aria-expanded", String(opening));
            btn.textContent = opening ? "Tutup Topik Obrolan" : "Buka Topik Obrolan";
            scheduleTrailGeometryUpdate();
        });

        card.append(badge, teaser, btn, panel);

        const miniGame = createTalkMiniGame(talk.miniGame);
        if (miniGame) {
            card.appendChild(miniGame);
        }

        li.appendChild(card);
        return li;
    }

    function createChatCardElement(chat) {
        const card = document.createElement("div");
        card.className = "chat-mockup";

        const header = document.createElement("div");
        header.className = "chat-header";

        const info = document.createElement("div");
        info.className = "chat-header-info";
        const tag = document.createElement("span");
        tag.className = "chat-platform-tag";
        tag.textContent = `${chat.platform} // ${chat.date}`;
        const prompt = document.createElement("p");
        prompt.className = "chat-prompt";
        prompt.textContent = chat.prompt;
        info.append(tag, prompt);

        const replayBtn = document.createElement("button");
        replayBtn.type = "button";
        replayBtn.className = "btn-replay-chat";
        replayBtn.textContent = "Putar Ulang";
        replayBtn.addEventListener("click", () => {
            card.classList.remove("is-visible");
            void card.offsetWidth;
            window.setTimeout(() => {
                card.classList.add("is-visible");
            }, 35);
        });

        header.append(info, replayBtn);

        const thread = document.createElement("div");
        thread.className = "chat-thread";
        chat.messages.forEach((msg, msgIdx) => {
            const bubble = document.createElement("div");
            bubble.className = `chat-bubble ${msg.from === "jay" ? "chat-bubble--jay" : "chat-bubble--rara"}`;
            bubble.style.setProperty("--msg-idx", String(msgIdx));

            const body = document.createElement("p");
            body.className = "chat-text";
            body.textContent = msg.text;

            const meta = document.createElement("p");
            meta.className = "chat-meta";
            meta.textContent = `${msg.from === "jay" ? "Jay" : "Rara"} | ${msg.time}`;

            bubble.append(body, meta);
            thread.appendChild(bubble);
        });

        card.append(header, thread);
        return card;
    }

    /**
     * Builds the opposite-column visual companion (Scrapbook Polaroid Pinboard or Tarot Illustration Plate).
     */
    function createCheckpointCompanion(cp) {
        const companion = document.createElement("aside");
        companion.className = "checkpoint-companion";
        companion.setAttribute("aria-label", `Ilustrasi dan arsip pos ${cp.postNum}`);

        const hasPhotos = Array.isArray(cp.photos) && cp.photos.length > 0;
        if (hasPhotos) {
            const board = document.createElement("div");
            board.className = "polaroid-board";

            const tape = document.createElement("span");
            tape.className = "card-washi-tape";
            tape.setAttribute("aria-hidden", "true");
            board.appendChild(tape);

            const boardHeader = document.createElement("div");
            boardHeader.className = "polaroid-board-header";
            const label = document.createElement("span");
            label.className = "mono-tag";
            label.textContent = `PAPAN SCRAPBOOK POS ${cp.postNum}`;
            const mdplTag = document.createElement("span");
            mdplTag.className = "mono-tag";
            mdplTag.textContent = `${cp.altitude.toUpperCase()} | ${cp.date}`;
            boardHeader.append(label, mdplTag);
            board.appendChild(boardHeader);

            const grid = document.createElement("div");
            grid.className = `polaroid-grid polaroid-grid--${cp.photos.length}`;
            cp.photos.forEach((photo, photoIdx) => {
                const tile = document.createElement("button");
                tile.type = "button";
                tile.className = `polaroid-item${photo.contain ? " polaroid-item--contain" : ""}`;
                tile.style.setProperty("--photo-idx", String(photoIdx));
                tile.setAttribute("aria-label", `Perbesar foto: ${photo.caption}`);

                const img = document.createElement("img");
                img.width = 400;
                img.height = 300;
                img.src = photo.src;
                img.alt = photo.alt;
                img.loading = "lazy";
                img.addEventListener("load", scheduleTrailGeometryUpdate);

                const stampTag = document.createElement("span");
                stampTag.className = "polaroid-stamp-tag";
                stampTag.textContent = `ARSIP 27 // POS ${cp.postNum}`;

                const cap = document.createElement("span");
                cap.className = "polaroid-caption";
                cap.textContent = photo.caption;

                tile.append(img, stampTag, cap);
                tile.addEventListener("click", () => {
                    const galleryIdx = LIGHTBOX_GALLERY.findIndex((item) => item.src === photo.src);
                    openImageLightbox(photo.src, cp.title, photo.caption, null, galleryIdx);
                });

                grid.appendChild(tile);
            });
            board.appendChild(grid);

            if (cp.pullQuote) {
                const quote = document.createElement("p");
                quote.className = "polaroid-pullquote";
                quote.textContent = cp.pullQuote;
                board.appendChild(quote);
            }

            companion.appendChild(board);
            return companion;
        }

        const plate = document.createElement("div");
        plate.className = "story-vignette";

        const stamp = document.createElement("p");
        stamp.className = "vignette-stamp";
        stamp.textContent = `POS ${cp.postNum} // ${cp.altitude.toUpperCase()} // ${cp.date}`;

        const halo = document.createElement("div");
        halo.className = "vignette-arch-halo";

        const svgWrap = document.createElement("div");
        svgWrap.className = "vignette-svg-wrap";
        svgWrap.setAttribute("aria-hidden", "true");
        svgWrap.innerHTML = VIGNETTE_SVGS[cp.vignette] || VIGNETTE_SVGS["quill-arch"];
        halo.appendChild(svgWrap);

        const quote = document.createElement("blockquote");
        quote.className = "vignette-quote";
        quote.textContent = cp.pullQuote || cp.title;

        const waxFoot = document.createElement("span");
        waxFoot.className = "vignette-wax-chip";
        waxFoot.textContent = `SEGEL EKSPEDISI 27 // POS ${cp.postNum}`;

        plate.append(stamp, halo, quote, waxFoot);
        companion.appendChild(plate);
        return companion;
    }

    function renderTrailCheckpoints() {
        const stackFrag = document.createDocumentFragment();
        const realmMap = new Map();

        [1, 2, 3, 4].forEach((bId) => {
            const realmSec = document.createElement("section");
            realmSec.className = `biome-realm biome-realm--${bId} biome-${bId}`;
            realmSec.id = `biome-realm-${bId}`;
            realmSec.dataset.biomeId = String(bId);
            realmSec.setAttribute("aria-label", BIOME_META[bId].title);

            if (REALM_SCENERY_SVGS[bId]) {
                const scenery = document.createElement("div");
                scenery.className = "realm-scenery-bg";
                scenery.setAttribute("aria-hidden", "true");
                scenery.innerHTML = REALM_SCENERY_SVGS[bId];
                realmSec.appendChild(scenery);
            }

            const realmList = document.createElement("ol");
            realmList.className = "realm-list";
            const banner = createBiomeBanner(bId);
            if (banner) {
                realmList.appendChild(banner);
            }

            realmSec.appendChild(realmList);
            stackFrag.appendChild(realmSec);
            realmMap.set(bId, realmList);
        });

        TRAIL_CHECKPOINTS.forEach((cp, index) => {
            const realmList = realmMap.get(cp.biome);
            const li = document.createElement("li");
            li.className = `checkpoint-item biome-${cp.biome} ${index % 2 === 0 ? "checkpoint--left" : "checkpoint--right"}`;
            li.id = cp.id;
            li.dataset.altitude = cp.altitude;
            li.dataset.posIndex = String(index);

            const node = document.createElement("div");
            node.className = "checkpoint-node";
            node.setAttribute("aria-hidden", "true");
            node.textContent = cp.postNum;

            const card = document.createElement("article");
            card.className = "checkpoint-card";

            const tape = document.createElement("span");
            tape.className = "card-washi-tape";
            tape.setAttribute("aria-hidden", "true");
            card.appendChild(tape);

            const headRow = document.createElement("div");
            headRow.className = "card-head-row";

            const pillRow = document.createElement("div");
            pillRow.className = "pos-pill-row";
            [
                `POS ${cp.postNum}`,
                cp.altitude.toUpperCase(),
                cp.date
            ].forEach((txt) => {
                const pill = document.createElement("span");
                pill.className = "pos-pill";
                pill.textContent = txt;
                pillRow.appendChild(pill);
            });

            const miniWax = document.createElement("span");
            miniWax.className = "card-wax-mini";
            miniWax.setAttribute("aria-hidden", "true");
            miniWax.textContent = "27";

            headRow.append(pillRow, miniWax);

            const title = document.createElement("h3");
            title.className = "checkpoint-title reveal-line";
            title.style.setProperty("--line-index", "0");
            title.textContent = cp.title;

            card.append(headRow, title);

            if (Array.isArray(cp.lines) && cp.lines.length > 0) {
                const linesWrap = document.createElement("div");
                linesWrap.className = "checkpoint-lines";
                cp.lines.forEach((text, lineIdx) => {
                    const p = document.createElement("p");
                    p.className = "reveal-line";
                    p.style.setProperty("--line-index", String(lineIdx + 1));
                    p.textContent = text;
                    linesWrap.appendChild(p);
                });
                card.appendChild(linesWrap);
            }

            if (Array.isArray(cp.chats) && cp.chats.length > 0) {
                cp.chats.forEach((chat) => {
                    card.appendChild(createChatCardElement(chat));
                });
            } else if (cp.vignette) {
                // Add inline miniature storybook vignette on photo-only story cards so Side A stays visually rich.
                const miniStrip = document.createElement("div");
                miniStrip.className = "card-vignette-strip";
                const art = document.createElement("div");
                art.className = "card-vignette-art";
                art.setAttribute("aria-hidden", "true");
                art.innerHTML = VIGNETTE_SVGS[cp.vignette] || VIGNETTE_SVGS["quill-arch"];
                const artSvg = art.querySelector("svg");
                if (artSvg) {
                    artSvg.setAttribute("width", "76");
                    artSvg.setAttribute("height", "50");
                }
                const miniQ = document.createElement("p");
                miniQ.className = "card-vignette-quote";
                miniQ.textContent = cp.pullQuote || "";
                miniStrip.append(art, miniQ);
                card.appendChild(miniStrip);
            }

            if (cp.footnote) {
                const foot = document.createElement("p");
                foot.className = "checkpoint-footnote";
                foot.textContent = cp.footnote;
                card.appendChild(foot);
            }

            if (cp.secretNote) {
                const secretWrap = document.createElement("div");
                secretWrap.className = "secret-note-wrap";

                const toggleBtn = document.createElement("button");
                toggleBtn.type = "button";
                toggleBtn.className = "btn-secret-note";
                toggleBtn.setAttribute("aria-expanded", "false");
                toggleBtn.textContent = "Buka Catatan Jay";

                const noteBody = document.createElement("div");
                noteBody.className = "secret-note-body";
                noteBody.hidden = true;
                noteBody.textContent = cp.secretNote;

                toggleBtn.addEventListener("click", () => {
                    const isOpen = noteBody.hidden;
                    noteBody.hidden = !isOpen;
                    toggleBtn.setAttribute("aria-expanded", String(isOpen));
                    toggleBtn.textContent = isOpen ? "Tutup Catatan Jay" : "Buka Catatan Jay";
                    scheduleTrailGeometryUpdate();
                });

                secretWrap.append(toggleBtn, noteBody);
                card.appendChild(secretWrap);
            }

            const quickGameBox = createPosQuickGame(cp);
            if (quickGameBox) {
                card.appendChild(quickGameBox);
            }

            const companion = createCheckpointCompanion(cp);
            li.append(node, card, companion);
            realmList.appendChild(li);

            if (cp.talkAfter) {
                realmList.appendChild(createTalkCardItem(cp.talkAfter, cp.biome));
            }
        });

        el.checkpointList.replaceChildren(stackFrag);
    }

    /**
     * Recomputes the continuous winding SVG spine curve across all 4 realms.
     */
    function updateTrailSvgGeometry() {
        const containerRect = el.trailCanvas.getBoundingClientRect();
        const nodes = el.trailCanvas.querySelectorAll(".checkpoint-node");
        if (nodes.length < 2 || containerRect.width === 0) {
            return;
        }

        const isMobile = window.innerWidth < 860;
        const points = Array.from(nodes).map((node) => {
            const rect = node.getBoundingClientRect();
            const baseX = rect.left - containerRect.left + rect.width / 2;
            const cy = rect.top - containerRect.top + rect.height / 2;
            return { x: baseX, y: cy };
        });

        const width = Math.max(Math.round(containerRect.width), 320);
        const height = Math.max(Math.round(containerRect.height), Math.round(points[points.length - 1].y + 40));
        el.trailSvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
        el.trailSvg.setAttribute("width", String(width));
        el.trailSvg.setAttribute("height", String(height));
        if (el.trailBiomeGrad) {
            el.trailBiomeGrad.setAttribute("y2", String(height));
        }

        let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
        for (let i = 0; i < points.length - 1; i += 1) {
            const p1 = points[i];
            const p2 = points[i + 1];
            if (isMobile) {
                d += ` L ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
            } else {
                const swing = (i % 2 === 0 ? 1 : -1) * 10;
                const dy = p2.y - p1.y;
                const c1y = p1.y + dy * 0.35;
                const c2y = p1.y + dy * 0.65;
                d += ` C ${(p1.x + swing).toFixed(1)} ${c1y.toFixed(1)}, ${(p2.x + swing).toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
            }
        }

        el.trailPathGuide.setAttribute("d", d);
        el.trailPathActive.setAttribute("d", d);

        const totalLen = el.trailPathActive.getTotalLength();
        state.trailTotalLength = totalLen;
        el.trailPathActive.style.strokeDasharray = `${totalLen} ${totalLen}`;

        updateScrollEffects();
    }

    function scheduleTrailGeometryUpdate() {
        if (state.resizeTimer) {
            window.clearTimeout(state.resizeTimer);
        }
        state.resizeTimer = window.setTimeout(updateTrailSvgGeometry, 90);
    }

    function revealVisibleElementsNow() {
        const thresholdY = window.innerHeight * 0.82;
        const targets = document.querySelectorAll(
            ".reveal-group, .biome-banner, .talk-card, .checkpoint-item, .chat-mockup, .book-letter-card"
        );
        targets.forEach((item) => {
            if (item.classList.contains("is-visible")) {
                return;
            }
            const rect = item.getBoundingClientRect();
            if (rect.top < thresholdY && rect.bottom > -80) {
                item.classList.add("is-visible");
                if (item.classList.contains("checkpoint-item")) {
                    item.querySelectorAll(".chat-mockup").forEach((c) => c.classList.add("is-visible"));
                }
            }
        });
    }

    function updateActiveTrailStage() {
        const jalurRect = el.jalurSection ? el.jalurSection.getBoundingClientRect() : null;
        const inTrail = Boolean(jalurRect && jalurRect.top < window.innerHeight * 0.72 && jalurRect.bottom > 180);
        if (el.storyStepperDock) {
            el.storyStepperDock.hidden = !inTrail;
        }
        const items = Array.from(document.querySelectorAll(".checkpoint-item"));
        if (items.length === 0) {
            return;
        }
        const centerAnchor = window.innerHeight * 0.44;
        let bestIdx = state.activePosIndex || 0;
        let bestDist = Infinity;
        items.forEach((item, idx) => {
            const rect = item.getBoundingClientRect();
            const itemMid = rect.top + Math.min(rect.height, window.innerHeight * 0.6) * 0.5;
            const dist = Math.abs(itemMid - centerAnchor);
            if (dist < bestDist) {
                bestDist = dist;
                bestIdx = idx;
            }
        });
        state.activePosIndex = bestIdx;
        items.forEach((item, idx) => {
            item.classList.toggle("is-active-stage", inTrail && idx === bestIdx);
        });
        const activeCp = TRAIL_CHECKPOINTS[bestIdx];
        if (el.stepperPosLabel && activeCp) {
            el.stepperPosLabel.textContent = `POS ${activeCp.postNum} / ${TRAIL_CHECKPOINTS.length} // ${activeCp.altitude.toUpperCase()}`;
        }
        if (el.stepPrevPosBtn) {
            el.stepPrevPosBtn.disabled = bestIdx <= 0;
        }
        if (el.stepNextPosBtn) {
            el.stepNextPosBtn.disabled = bestIdx >= TRAIL_CHECKPOINTS.length - 1;
        }

        let targetBiome = activeCp ? activeCp.biome : 1;
        if (jalurRect) {
            if (jalurRect.top > window.innerHeight * 0.72) {
                targetBiome = 1;
            } else if (jalurRect.bottom <= 180) {
                targetBiome = 4;
            }
        }
        if (state.currentBiome !== targetBiome) {
            state.currentBiome = targetBiome;
        }
        if (el.worldAmbienceStage && el.worldAmbienceStage.getAttribute("data-biome") !== String(targetBiome)) {
            el.worldAmbienceStage.setAttribute("data-biome", String(targetBiome));
        }
    }

    function navigateToCheckpoint(targetIdx) {
        const clamped = Math.max(0, Math.min(TRAIL_CHECKPOINTS.length - 1, targetIdx));
        const cp = TRAIL_CHECKPOINTS[clamped];
        if (!cp) {
            return;
        }
        const targetEl = document.getElementById(cp.id);
        if (!targetEl) {
            return;
        }
        targetEl.classList.add("is-visible");
        targetEl.querySelectorAll(".chat-mockup").forEach((c) => c.classList.add("is-visible"));
        targetEl.scrollIntoView({
            behavior: reducedMotionQuery.matches ? "auto" : "smooth",
            block: "center"
        });
        state.activePosIndex = clamped;
        updateActiveTrailStage();
    }

    function updateActiveChapterNav() {
        const anchorY = Math.min(window.innerHeight * 0.36, 280);
        let activeId = el.sections[0] ? el.sections[0].id : "basecamp";
        el.sections.forEach((sec) => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= anchorY && rect.bottom > anchorY) {
                activeId = sec.id;
            }
        });
        if (
            window.innerHeight + (window.scrollY || 0) >= document.documentElement.scrollHeight - 24 &&
            el.sections.length > 0
        ) {
            activeId = el.sections[el.sections.length - 1].id;
        }
        el.navPills.forEach((pill) => {
            const match = pill.dataset.section === activeId;
            pill.classList.toggle("is-active", match);
            if (match) {
                pill.setAttribute("aria-current", "location");
            } else {
                pill.removeAttribute("aria-current");
            }
        });
    }

    function checkRealmAndSummitStamps() {
        const stampTargets = [
            { el: document.getElementById("biome-realm-1"), stamp: "lembah" },
            { el: document.getElementById("biome-realm-2"), stamp: "lentera" },
            { el: document.getElementById("biome-realm-3"), stamp: "bidadari" },
            { el: document.getElementById("biome-realm-4"), stamp: "bintang" },
            { el: document.getElementById("puncak"), stamp: "puncak" }
        ];
        const triggerLine = window.innerHeight * 0.85;
        stampTargets.forEach((item) => {
            if (!item.el) {
                return;
            }
            const rect = item.el.getBoundingClientRect();
            if (rect.top < triggerLine && rect.bottom > 0) {
                unlockStamp(item.stamp);
            }
        });
    }

    function updateScrollEffects() {
        state.scrollRafPending = false;
        const doc = document.documentElement;
        const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
        const scrollTop = window.scrollY || window.pageYOffset || 0;
        const ratio = Math.max(0, Math.min(1, scrollTop / maxScroll));

        el.scrollProgressBar.style.width = `${(ratio * 100).toFixed(2)}%`;

        if (!reducedMotionQuery.matches) {
            const heroRatio = Math.max(0, Math.min(1.2, scrollTop / Math.max(420, window.innerHeight)));
            el.root.style.setProperty("--hero-scroll", heroRatio.toFixed(4));
        } else {
            el.root.style.setProperty("--hero-scroll", "0");
        }

        if (state.trailTotalLength > 0) {
            if (reducedMotionQuery.matches) {
                el.trailPathActive.style.strokeDashoffset = "0";
            } else {
                const trailRect = el.trailCanvas.getBoundingClientRect();
                const startAnchor = window.innerHeight * 0.68;
                const scrolledInside = startAnchor - trailRect.top;
                const progress = Math.max(0, Math.min(1, scrolledInside / Math.max(240, trailRect.height - 160)));
                const offset = state.trailTotalLength * (1 - progress);
                el.trailPathActive.style.strokeDashoffset = String(offset.toFixed(1));

                const currentMdpl = Math.round(100 + progress * 2600);
                const formattedMdpl = currentMdpl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                el.elevationReadout.textContent = `${formattedMdpl} mdpl`;
            }
        }

        revealVisibleElementsNow();
        updateActiveTrailStage();
        updateActiveChapterNav();
        checkRealmAndSummitStamps();
    }

    function onWindowScroll() {
        if (!state.scrollRafPending) {
            state.scrollRafPending = true;
            window.requestAnimationFrame(updateScrollEffects);
        }
    }

    function setupObservers() {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        if (entry.target.classList.contains("checkpoint-item")) {
                            entry.target.querySelectorAll(".chat-mockup").forEach((c) => c.classList.add("is-visible"));
                        }
                    }
                });
            },
            { threshold: 0.14, rootMargin: "0px 0px -14% 0px" }
        );

        document
            .querySelectorAll(".reveal-group, .biome-banner, .talk-card, .checkpoint-item, .chat-mockup, .book-letter-card")
            .forEach((node) => revealObserver.observe(node));

        revealVisibleElementsNow();
        updateActiveTrailStage();
        updateActiveChapterNav();
        checkRealmAndSummitStamps();
    }

    function getSummaryRows() {
        const fallback = "Belum dijawab di kuis";
        return [
            { label: "01. Awal Notice di FYP", answer: state.quizAnswers["step-origin-fyp"] || fallback },
            { label: "02. Matkul 17 Sep", answer: state.quizAnswers["step-deeptalk"] || fallback },
            { label: "03. Malam Gramed Jalma", answer: state.quizAnswers["step-gramed-jalma"] || fallback },
            { label: "04. Momen Paling Kita", answer: state.quizAnswers["step-momen-kita"] || fallback },
            { label: "05. Kamus Typo & Lore", answer: state.quizAnswers["step-kamus-typo"] || fallback },
            { label: "06. Nyesel Follback?", answer: state.quizAnswers["step-bareng-terus"] || fallback }
        ];
    }

    function wrapCanvasLines(ctx, text, maxWidth) {
        const words = String(text || "").split(/\s+/).filter(Boolean);
        if (words.length === 0) {
            return [];
        }
        const lines = [];
        let current = words[0];
        for (let i = 1; i < words.length; i += 1) {
            const candidate = `${current} ${words[i]}`;
            if (ctx.measureText(candidate).width <= maxWidth) {
                current = candidate;
            } else {
                lines.push(current);
                current = words[i];
            }
        }
        lines.push(current);
        return lines;
    }

    function updateLetterAndSummaryPreview() {
        const cleanNote = state.raraNote.trim();
        const snippet = cleanNote
            ? `Catatan Rara: "${cleanNote.slice(0, 72)}${cleanNote.length > 72 ? "..." : ""}"`
            : "Belum ada catatan pribadi dari Rara (opsional).";
        el.letterSavedSummary.textContent = `Nilai perjalanan saat ini: ${state.ratingScore} / 100. ${snippet}`;

        const frag = document.createDocumentFragment();
        getSummaryRows().forEach((row) => {
            const box = document.createElement("div");
            box.className = "summary-row";
            const q = document.createElement("p");
            q.className = "summary-q";
            q.textContent = row.label;
            const a = document.createElement("p");
            a.className = "summary-a";
            a.textContent = row.answer;
            box.append(q, a);
            frag.appendChild(box);
        });

        const scoreBox = document.createElement("div");
        scoreBox.className = "summary-row";
        const sq = document.createElement("p");
        sq.className = "summary-q";
        sq.textContent = "07. NILAI PERTEMANAN & CATATAN";
        const sa = document.createElement("p");
        sa.className = "summary-a";
        sa.textContent = cleanNote
            ? `${state.ratingScore} / 100 | "${cleanNote}"`
            : `${state.ratingScore} / 100 (${getScoreDescriptor(state.ratingScore)})`;
        scoreBox.append(sq, sa);
        frag.appendChild(scoreBox);

        el.summaryPreviewBody.replaceChildren(frag);
        renderSummaryCardPng();
    }

    function traceRoundRect(ctx, x, y, w, h, r) {
        const radius = Math.max(0, Math.min(r, w / 2, h / 2));
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.arcTo(x + w, y, x + w, y + h, radius);
        ctx.arcTo(x + w, y + h, x, y + h, radius);
        ctx.arcTo(x, y + h, x, y, radius);
        ctx.arcTo(x, y, x + w, y, radius);
        ctx.closePath();
    }

    function drawFourPointStar(ctx, cx, cy, r, color, alpha = 1) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r);
        ctx.quadraticCurveTo(cx + r * 0.14, cy - r * 0.14, cx + r, cy);
        ctx.quadraticCurveTo(cx + r * 0.14, cy + r * 0.14, cx, cy + r);
        ctx.quadraticCurveTo(cx - r * 0.14, cy + r * 0.14, cx - r, cy);
        ctx.quadraticCurveTo(cx - r * 0.14, cy - r * 0.14, cx, cy - r);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function drawStripCornerFiligree(ctx, x, y, dirX, dirY, color, foilColor) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dirX, dirY);

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 46);
        ctx.lineTo(0, 8);
        ctx.quadraticCurveTo(0, 0, 8, 0);
        ctx.lineTo(46, 0);
        ctx.stroke();

        ctx.strokeStyle = foilColor;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(7, 32);
        ctx.lineTo(7, 13);
        ctx.quadraticCurveTo(7, 7, 13, 7);
        ctx.lineTo(32, 7);
        ctx.stroke();

        // Botanical curved leaves & corner rivet
        ctx.fillStyle = foilColor;
        ctx.beginPath();
        ctx.arc(8, 8, 3.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = color;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(22, 13, 5.5, 2.2, -0.35, 0, Math.PI * 2);
        ctx.ellipse(13, 22, 2.2, 5.5, 0.35, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }

    function drawWaxSeal27(ctx, cx, cy, radius, waxColor, foilColor) {
        ctx.save();

        // Twin ceremonial ribbons beneath seal
        ctx.fillStyle = waxColor;
        ctx.beginPath();
        ctx.moveTo(cx - radius * 0.45, cy + radius * 0.35);
        ctx.lineTo(cx - radius * 0.72, cy + radius * 1.45);
        ctx.lineTo(cx - radius * 0.25, cy + radius * 1.18);
        ctx.lineTo(cx, cy + radius * 0.65);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(cx + radius * 0.45, cy + radius * 0.35);
        ctx.lineTo(cx + radius * 0.72, cy + radius * 1.45);
        ctx.lineTo(cx + radius * 0.25, cy + radius * 1.18);
        ctx.lineTo(cx, cy + radius * 0.65);
        ctx.closePath();
        ctx.fill();

        // Scalloped 12-lobe outer wax rim
        ctx.beginPath();
        const lobes = 12;
        for (let i = 0; i <= lobes * 2; i += 1) {
            const angle = (i / (lobes * 2)) * Math.PI * 2;
            const r = i % 2 === 0 ? radius * 1.08 : radius * 0.94;
            const px = cx + Math.cos(angle) * r;
            const py = cy + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = waxColor;
        ctx.fill();
        ctx.strokeStyle = foilColor;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.76, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.38)";
        ctx.lineWidth = 1.3;
        ctx.stroke();

        ctx.fillStyle = "#FAF6EE";
        ctx.font = `700 ${Math.round(radius * 0.72)}px "Fraunces", Georgia, serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("27", cx, cy + 1);
        ctx.restore();
    }

    function drawMiniStampRow(ctx, startX, y, totalWidth, palette) {
        const labels = ["FYP", "LEMBAH", "LENTERA", "BIDADARI", "BINTANG", "PUNCAK 27"];
        const gap = 8;
        ctx.save();
        ctx.font = '600 10.5px "JetBrains Mono", Consolas, monospace';
        let curX = startX;
        let curY = y;
        labels.forEach((lbl) => {
            const chipW = Math.ceil(ctx.measureText(lbl).width + 16);
            if (curX + chipW > startX + totalWidth && curX > startX) {
                curX = startX;
                curY += 28;
            }
            ctx.fillStyle = palette.accentSoft;
            ctx.strokeStyle = palette.border;
            ctx.lineWidth = 1.1;
            traceRoundRect(ctx, curX, curY, chipW, 22, 11);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = palette.text;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(lbl, curX + chipW / 2, curY + 11.5);
            curX += chipW + gap;
        });
        ctx.restore();
    }

    async function renderSummaryCardPng() {
        if (document.fonts && document.fonts.ready) {
            try {
                await document.fonts.ready;
            } catch (_) {
                // Proceed cleanly with available fonts.
            }
        }

        const canvas = el.summaryCanvas;
        const width = 800;
        const height = 1360;
        canvas.width = width;
        canvas.height = height;
        const pad = 52;
        const innerW = width - pad * 2;
        const ctx = canvas.getContext("2d");
        const sumPalette = STRIP_PALETTES.parchment;

        ctx.fillStyle = "#FAF6EE";
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = "#835811";
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.strokeStyle = "#D8A84E";
        ctx.lineWidth = 1.3;
        ctx.strokeRect(18, 18, width - 36, height - 36);

        drawStripCornerFiligree(ctx, 24, 24, 1, 1, "#835811", "#D8A84E");
        drawStripCornerFiligree(ctx, width - 24, 24, -1, 1, "#835811", "#D8A84E");
        drawStripCornerFiligree(ctx, 24, height - 24, 1, -1, "#835811", "#D8A84E");
        drawStripCornerFiligree(ctx, width - 24, height - 24, -1, -1, "#835811", "#D8A84E");

        // Top ceremonial crest band
        drawFourPointStar(ctx, width / 2, 46, 10, "#835811", 0.9);
        drawFourPointStar(ctx, width / 2 - 36, 46, 5, "#D8A84E", 0.9);
        drawFourPointStar(ctx, width / 2 + 36, 46, 5, "#D8A84E", 0.9);

        ctx.fillStyle = "#1A4F3E";
        ctx.fillRect(pad, 62, innerW, 5);
        ctx.fillStyle = "#D8A84E";
        ctx.fillRect(pad, 72, innerW, 1.5);

        ctx.fillStyle = "#1C1821";
        ctx.font = '600 25px "Fraunces", Georgia, serif';
        ctx.fillText("KARTU RANGKUMAN KENANGAN", pad, 114);

        ctx.fillStyle = "#504754";
        ctx.font = '600 15px "JetBrains Mono", Consolas, monospace';
        const codeTxt = "EKSPEDISI-27";
        ctx.fillText(codeTxt, width - pad - ctx.measureText(codeTxt).width, 114);

        ctx.fillStyle = "#EDE4D3";
        ctx.fillRect(pad, 136, innerW, 88);
        ctx.strokeStyle = "#835811";
        ctx.lineWidth = 1.2;
        ctx.strokeRect(pad, 136, innerW, 88);

        ctx.fillStyle = "#1C1821";
        ctx.font = '600 20px "Fraunces", Georgia, serif';
        ctx.fillText("Anisa Rahma Eka Widyastuti (Rara)", pad + 20, 172);
        ctx.fillStyle = "#504754";
        ctx.font = '500 14px "JetBrains Mono", Consolas, monospace';
        ctx.fillText("ARSIP KENANGAN // AGUSTUS - 27 NOV 2026", pad + 20, 204);

        let y = 264;
        const rows = getSummaryRows();
        rows.forEach((row) => {
            ctx.fillStyle = "#835811";
            ctx.font = '600 13.5px "JetBrains Mono", Consolas, monospace';
            ctx.fillText(row.label.toUpperCase(), pad, y);
            y += 24;

            ctx.fillStyle = "#1C1821";
            ctx.font = '600 18.5px "Plus Jakarta Sans", "Segoe UI", sans-serif';
            const wrapped = wrapCanvasLines(ctx, row.answer, innerW);
            wrapped.slice(0, 2).forEach((line) => {
                ctx.fillText(line, pad, y);
                y += 25;
            });

            ctx.fillStyle = "#E1D8C5";
            ctx.fillRect(pad, y + 4, innerW, 1.5);
            y += 28;
        });

        ctx.fillStyle = "#8F2631";
        ctx.font = '600 14px "JetBrains Mono", Consolas, monospace';
        ctx.fillText("07. NILAI PERTEMANAN KENAL JAY", pad, y + 6);
        y += 40;

        ctx.fillStyle = "#1A4F3E";
        ctx.font = '700 32px "Fraunces", Georgia, serif';
        ctx.fillText(`${state.ratingScore} / 100`, pad, y);

        y += 24;
        const cleanNote = state.raraNote.trim();
        const noteText = cleanNote
            ? `"${cleanNote}"`
            : '"Terima kasih sudah jalan bareng di Ekspedisi Arsip 27."';
        const noteLines = wrapCanvasLines(ctx, noteText, innerW - 36).slice(0, 3);
        const boxHeight = Math.max(86, 32 + noteLines.length * 25);

        ctx.fillStyle = "#EDE4D3";
        ctx.fillRect(pad, y, innerW, boxHeight);
        ctx.strokeStyle = "#835811";
        ctx.lineWidth = 1.4;
        ctx.strokeRect(pad, y, innerW, boxHeight);

        ctx.fillStyle = "#1C1821";
        ctx.font = 'italic 18px "Fraunces", Georgia, serif';
        noteLines.forEach((line, idx) => {
            ctx.fillText(line, pad + 18, y + 32 + idx * 25);
        });

        const footerY = height - 156;
        drawMiniStampRow(ctx, pad, footerY, innerW - 110, sumPalette);

        ctx.fillStyle = "#C9BEA8";
        ctx.fillRect(pad, footerY + 42, innerW - 110, 1.5);

        ctx.fillStyle = "#1C1821";
        ctx.font = '600 18px "Fraunces", Georgia, serif';
        ctx.fillText("DARI JAY // EKSPEDISI ARSIP 27", pad, footerY + 84);

        const dateText = "27 NOV 2026";
        ctx.fillStyle = "#8F2631";
        ctx.font = '600 13.5px "JetBrains Mono", Consolas, monospace';
        ctx.fillText(dateText, pad, footerY + 112);

        drawWaxSeal27(ctx, width - pad - 44, footerY + 72, 34, "#8F2631", "#D8A84E");

        state.summaryDataUrl = canvas.toDataURL("image/png");
    }

    function drawCoverCropped(ctx, source, srcW, srcH, destX, destY, destW, destH, mirror) {
        const targetRatio = destW / destH;
        const sourceRatio = srcW / srcH;
        let sx = 0;
        let sy = 0;
        let sWidth = srcW;
        let sHeight = srcH;

        if (sourceRatio > targetRatio) {
            sWidth = srcH * targetRatio;
            sx = (srcW - sWidth) / 2;
        } else if (sourceRatio < targetRatio) {
            sHeight = srcW / targetRatio;
            sy = (srcH - sHeight) / 2;
        }

        ctx.save();
        if (mirror) {
            ctx.translate(destX + destW, destY);
            ctx.scale(-1, 1);
            ctx.drawImage(source, sx, sy, sWidth, sHeight, 0, 0, destW, destH);
        } else {
            ctx.drawImage(source, sx, sy, sWidth, sHeight, destX, destY, destW, destH);
        }
        ctx.restore();
    }

    function loadImageElement(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error("Gagal memuat gambar."));
            img.src = src;
        });
    }

    function drawStripMarginMotifs(ctx, width, height, palette) {
        // Outer metallic border & double inner hairline
        ctx.save();
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 3;
        ctx.strokeRect(10, 10, width - 20, height - 20);

        ctx.fillStyle = palette.card;
        ctx.fillRect(18, 18, width - 36, height - 36);

        ctx.strokeStyle = palette.foil;
        ctx.lineWidth = 1.4;
        ctx.strokeRect(24, 24, width - 48, height - 48);

        // Beaded side rails & celestial stars along left and right borders
        const dotStep = 44;
        for (let y = 130; y < height - 130; y += dotStep) {
            const odd = Math.floor(y / dotStep) % 2 === 0;
            if (odd) {
                drawFourPointStar(ctx, 14, y, 4.5, palette.foil, 0.9);
                drawFourPointStar(ctx, width - 14, y, 4.5, palette.foil, 0.9);
            } else {
                ctx.fillStyle = palette.border;
                ctx.beginPath();
                ctx.arc(14, y, 2.2, 0, Math.PI * 2);
                ctx.arc(width - 14, y, 2.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        drawStripCornerFiligree(ctx, 28, 28, 1, 1, palette.border, palette.foil);
        drawStripCornerFiligree(ctx, width - 28, 28, -1, 1, palette.border, palette.foil);
        drawStripCornerFiligree(ctx, 28, height - 28, 1, -1, palette.border, palette.foil);
        drawStripCornerFiligree(ctx, width - 28, height - 28, -1, -1, palette.border, palette.foil);
        ctx.restore();
    }

    function drawThemeEmblem(ctx, cx, cy, theme, palette) {
        ctx.save();
        ctx.strokeStyle = palette.border;
        ctx.fillStyle = palette.foil;
        ctx.lineWidth = 1.6;

        if (theme === "lantern") {
            ctx.beginPath();
            ctx.arc(cx, cy, 16, 0, Math.PI * 2);
            ctx.fillStyle = palette.accentSoft;
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx - 7, cy - 8);
            ctx.lineTo(cx + 7, cy - 8);
            ctx.lineTo(cx + 9, cy);
            ctx.lineTo(cx + 6, cy + 9);
            ctx.lineTo(cx - 6, cy + 9);
            ctx.lineTo(cx - 9, cy);
            ctx.closePath();
            ctx.fillStyle = palette.foil;
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx, cy + 1, 3, 0, Math.PI * 2);
            ctx.fillStyle = palette.wax;
            ctx.fill();
        } else if (theme === "berry") {
            ctx.beginPath();
            ctx.arc(cx, cy, 15, 0, Math.PI * 2);
            ctx.fillStyle = palette.accentSoft;
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx - 1, cy, 8, 0.4, Math.PI * 1.65);
            ctx.fillStyle = palette.foil;
            ctx.fill();
            drawFourPointStar(ctx, cx + 6, cy - 3, 4.5, palette.accent, 0.95);
        } else if (theme === "summit") {
            ctx.beginPath();
            ctx.moveTo(cx - 20, cy + 11);
            ctx.lineTo(cx - 6, cy - 7);
            ctx.lineTo(cx + 2, cy + 4);
            ctx.lineTo(cx + 10, cy - 10);
            ctx.lineTo(cx + 22, cy + 11);
            ctx.closePath();
            ctx.fillStyle = palette.accentSoft;
            ctx.fill();
            ctx.stroke();
            drawFourPointStar(ctx, cx, cy - 15, 5.5, palette.foil, 1);
        } else {
            // Parchment compass rose & oak leaves
            ctx.beginPath();
            ctx.arc(cx, cy, 16, 0, Math.PI * 2);
            ctx.fillStyle = palette.accentSoft;
            ctx.fill();
            ctx.stroke();
            drawFourPointStar(ctx, cx, cy, 11, palette.accent, 0.95);
            drawFourPointStar(ctx, cx, cy, 5, palette.foil, 1);
        }
        ctx.restore();
    }

    function drawStripHeaderCrest(ctx, width, sidePad, photoWidth, palette, theme, count) {
        const cx = width / 2;
        ctx.save();

        // Corner archive mono tags
        ctx.font = '600 12px "JetBrains Mono", Consolas, monospace';
        ctx.fillStyle = palette.muted;
        ctx.textAlign = "left";
        ctx.fillText("ARSIP-27", sidePad + 22, 54);
        ctx.textAlign = "right";
        ctx.fillText(`STRIP-${String(count).padStart(2, "0")}`, width - sidePad - 22, 54);

        // Top crest emblem & flanking stars
        drawThemeEmblem(ctx, cx, 54, theme, palette);
        ctx.strokeStyle = palette.foil;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sidePad + 94, 54);
        ctx.lineTo(cx - 32, 54);
        ctx.moveTo(cx + 32, 54);
        ctx.lineTo(width - sidePad - 94, 54);
        ctx.stroke();
        drawFourPointStar(ctx, cx - 44, 54, 4.5, palette.foil, 0.9);
        drawFourPointStar(ctx, cx + 44, 54, 4.5, palette.foil, 0.9);

        // Display heading
        ctx.textAlign = "center";
        ctx.fillStyle = palette.text;
        ctx.font = '700 25px "Fraunces", Georgia, serif';
        ctx.fillText("EKSPEDISI ARSIP 27", cx, 102);

        // Ornamental subtitle plaque
        const pillW = Math.min(photoWidth - 16, 460);
        const pillX = cx - pillW / 2;
        const pillY = 114;
        ctx.fillStyle = palette.accentSoft;
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 1.2;
        traceRoundRect(ctx, pillX, pillY, pillW, 28, 14);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = palette.text;
        ctx.font = '600 11.5px "JetBrains Mono", Consolas, monospace';
        ctx.textBaseline = "middle";
        ctx.fillText("JAY & RARA // 27 POS KENANGAN // 2.700 MDPL", cx, pillY + 14.5);

        // Decorative rule under header
        ctx.textBaseline = "alphabetic";
        ctx.strokeStyle = palette.accent;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(sidePad, 158);
        ctx.lineTo(sidePad + photoWidth, 158);
        ctx.stroke();
        drawFourPointStar(ctx, cx, 158, 6.5, palette.wax, 1);

        ctx.restore();
    }

    function drawOrnatePhotoSlot(ctx, img, x, y, w, h, index, count, slotGap, palette, theme) {
        const cornerTags = [
            "POS 01 // FYP BINUS",
            "SPOTIFY BLEND 100%",
            "PUNCAK 27 // 2.700 MDPL",
            "27 AGU -> 27 NOV"
        ];
        const dividerLabels = [
            "POSE 01 // LEMBAH AWAL",
            "POSE 02 // HUTAN LENTERA",
            "POSE 03 // GERBANG BIDADARI",
            "POSE 04 // PUNCAK BINTANG"
        ];

        ctx.save();
        // Polaroid mat card shadow + double matte rim
        ctx.fillStyle = "rgba(14, 18, 30, 0.14)";
        ctx.fillRect(x + 4, y + 6, w, h);

        ctx.fillStyle = palette.mat;
        ctx.fillRect(x, y, w, h);

        const pad = 11;
        const innerX = x + pad;
        const innerY = y + pad;
        const innerW = w - pad * 2;
        const innerH = h - pad * 2;

        if (img) {
            drawCoverCropped(ctx, img, img.naturalWidth, img.naturalHeight, innerX, innerY, innerW, innerH, false);
        } else {
            const grad = ctx.createRadialGradient(
                innerX + innerW / 2,
                innerY + innerH / 2,
                20,
                innerX + innerW / 2,
                innerY + innerH / 2,
                innerW * 0.72
            );
            grad.addColorStop(0, palette.accentSoft);
            grad.addColorStop(1, palette.mat);
            ctx.fillStyle = grad;
            ctx.fillRect(innerX, innerY, innerW, innerH);

            ctx.save();
            ctx.setLineDash([6, 6]);
            ctx.strokeStyle = palette.border;
            ctx.lineWidth = 1.4;
            ctx.strokeRect(innerX + 14, innerY + 14, innerW - 28, innerH - 28);
            ctx.restore();

            drawFourPointStar(ctx, innerX + 30, innerY + 30, 6, palette.foil, 0.9);
            drawFourPointStar(ctx, innerX + innerW - 30, innerY + 30, 6, palette.foil, 0.9);
            drawFourPointStar(ctx, innerX + 30, innerY + innerH - 30, 6, palette.foil, 0.9);
            drawFourPointStar(ctx, innerX + innerW - 30, innerY + innerH - 30, 6, palette.foil, 0.9);

            drawThemeEmblem(ctx, innerX + innerW / 2, innerY + innerH / 2 - 28, theme, palette);

            ctx.textAlign = "center";
            ctx.fillStyle = palette.text;
            ctx.font = '700 20px "Fraunces", Georgia, serif';
            ctx.fillText(`POSE ${String(index + 1).padStart(2, "0")} // SIAP DIPOTRET`, innerX + innerW / 2, innerY + innerH / 2 + 16);

            ctx.fillStyle = palette.muted;
            ctx.font = '500 13px "JetBrains Mono", Consolas, monospace';
            ctx.fillText("Buka Kamera / Upload / Isi Cepat Foto Momen", innerX + innerW / 2, innerY + innerH / 2 + 44);
        }

        // Photo aperture double frame & 4 vintage triangular photo corner mounts
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, w, h);
        ctx.strokeStyle = palette.foil;
        ctx.lineWidth = 1.2;
        ctx.strokeRect(innerX, innerY, innerW, innerH);

        const cSize = 22;
        const corners = [
            [x, y, 1, 1],
            [x + w, y, -1, 1],
            [x, y + h, 1, -1],
            [x + w, y + h, -1, -1]
        ];
        corners.forEach(([cx, cy, dx, dy]) => {
            ctx.fillStyle = palette.border;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + cSize * dx, cy);
            ctx.lineTo(cx, cy + cSize * dy);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = palette.foil;
            ctx.beginPath();
            ctx.arc(cx + 6 * dx, cy + 6 * dy, 2.2, 0, Math.PI * 2);
            ctx.fill();
        });

        // Alternating corner lore tag ribbon pill
        const tag = cornerTags[index % cornerTags.length];
        ctx.font = '600 10.5px "JetBrains Mono", Consolas, monospace';
        const tagW = Math.ceil(ctx.measureText(tag).width + 20);
        const onRight = index % 2 === 0;
        const tagX = onRight ? x + w - tagW - 14 : x + 14;
        const tagY = y + h - 34;

        ctx.fillStyle = palette.wax;
        traceRoundRect(ctx, tagX, tagY, tagW, 22, 6);
        ctx.fill();
        ctx.strokeStyle = palette.foil;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = "#FAF6EE";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(tag, tagX + tagW / 2, tagY + 11.5);

        // Ornamental floral divider plaque between slots
        if (index < count - 1) {
            const midY = y + h + slotGap / 2;
            const dText = dividerLabels[index % dividerLabels.length];
            ctx.font = '600 11px "JetBrains Mono", Consolas, monospace';
            const plaqueW = Math.ceil(ctx.measureText(dText).width + 32);
            const plaqueX = x + (w - plaqueW) / 2;

            ctx.strokeStyle = palette.border;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(x + 18, midY);
            ctx.lineTo(plaqueX - 10, midY);
            ctx.moveTo(plaqueX + plaqueW + 10, midY);
            ctx.lineTo(x + w - 18, midY);
            ctx.stroke();

            drawFourPointStar(ctx, x + 10, midY, 4.5, palette.foil, 0.95);
            drawFourPointStar(ctx, x + w - 10, midY, 4.5, palette.foil, 0.95);

            ctx.fillStyle = palette.accentSoft;
            ctx.strokeStyle = palette.border;
            traceRoundRect(ctx, plaqueX, midY - 12, plaqueW, 24, 12);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = palette.text;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(dText, x + w / 2, midY + 0.5);
        }

        ctx.restore();
    }

    function drawStripFooterCertificate(ctx, sidePad, footerY, photoWidth, canvasWidth, palette, captionText) {
        ctx.save();
        // Top ornate divider above footer certificate
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(sidePad, footerY);
        ctx.lineTo(sidePad + photoWidth, footerY);
        ctx.stroke();
        drawFourPointStar(ctx, canvasWidth / 2, footerY, 6, palette.wax, 1);

        // User caption + italic subtitle on left
        ctx.textAlign = "left";
        ctx.fillStyle = palette.text;
        ctx.font = '700 20px "Fraunces", Georgia, serif';
        ctx.fillText(captionText.slice(0, 44), sidePad, footerY + 34);

        ctx.fillStyle = palette.muted;
        ctx.font = 'italic 15.5px "Cormorant Garamond", Georgia, serif';
        ctx.fillText("Dari Kamera FYP BINUS hingga Puncak 27 November 2026", sidePad, footerY + 58);

        // Mini expedition stamp badges row
        drawMiniStampRow(ctx, sidePad, footerY + 74, photoWidth - 116, palette);

        // Postmark date pill on left bottom
        const dateText = "27 NOV 2026";
        ctx.font = '600 12px "JetBrains Mono", Consolas, monospace';
        const stampW = Math.ceil(ctx.measureText(dateText).width + 20);
        ctx.strokeStyle = palette.stamp;
        ctx.lineWidth = 1.6;
        ctx.strokeRect(sidePad, footerY + 112, stampW, 26);
        ctx.fillStyle = palette.stamp;
        ctx.textBaseline = "middle";
        ctx.fillText(dateText, sidePad + 10, footerY + 125.5);

        // Scalloped crimson-and-gold Wax Seal "27" on bottom right
        drawWaxSeal27(ctx, sidePad + photoWidth - 46, footerY + 86, 35, palette.wax, palette.foil);
        ctx.restore();
    }

    async function renderCatalogStrip() {
        if (document.fonts && document.fonts.ready) {
            try {
                await document.fonts.ready;
            } catch (_) {
                // Proceed with available fallback fonts.
            }
        }

        const count = state.shotCount;
        const activePhotos = state.photos.slice(0, count);
        const allFilled = activePhotos.every(Boolean);
        const theme = state.stripTheme;
        const palette = STRIP_PALETTES[theme] || STRIP_PALETTES.parchment;

        const isSingle = count === 1;
        const canvasWidth = isSingle ? 980 : 760;
        const sidePad = isSingle ? 58 : 54;
        const photoWidth = canvasWidth - sidePad * 2;
        const photoHeight = Math.round((photoWidth * 3) / 4);
        const headerBottomY = 178;
        const slotGap = 52;
        const footerTopGap = 32;
        const footerHeight = 196;
        const canvasHeight = headerBottomY + count * photoHeight + (count - 1) * slotGap + footerTopGap + footerHeight;

        const canvas = el.stripCanvas;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = palette.bg;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        drawStripMarginMotifs(ctx, canvasWidth, canvasHeight, palette);
        drawStripHeaderCrest(ctx, canvasWidth, sidePad, photoWidth, palette, theme, count);

        const loadedImages = await Promise.all(
            activePhotos.map((src) => (src ? loadImageElement(src).catch(() => null) : Promise.resolve(null)))
        );

        loadedImages.forEach((img, index) => {
            const y = headerBottomY + index * (photoHeight + slotGap);
            drawOrnatePhotoSlot(ctx, img, sidePad, y, photoWidth, photoHeight, index, count, slotGap, palette, theme);
        });

        const footerLineY = headerBottomY + count * photoHeight + (count - 1) * slotGap + footerTopGap;
        const captionText = (state.stripCaption || "Jay & Rara // Puncak 27").trim() || "Jay & Rara // Puncak 27";
        drawStripFooterCertificate(ctx, sidePad, footerLineY, photoWidth, canvasWidth, palette, captionText);

        const dataUrl = canvas.toDataURL("image/png");
        state.compositeDataUrl = dataUrl;
        el.downloadBtn.disabled = state.isCapturing || !allFilled;
        updateControlsState();
    }

    function ensureAudioContext() {
        if (!state.soundEnabled) {
            return null;
        }
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) {
            return null;
        }
        if (!state.audioContext) {
            state.audioContext = new AudioCtx();
        }
        if (state.audioContext.state === "suspended") {
            state.audioContext.resume().catch(() => {});
        }
        return state.audioContext;
    }

    function playTick() {
        const ctx = ensureAudioContext();
        if (!ctx) {
            return;
        }
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.exponentialRampToValueAtTime(420, now + 0.045);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.055);
    }

    function playShutter() {
        const ctx = ensureAudioContext();
        if (!ctx) {
            return;
        }
        const now = ctx.currentTime;
        const bufferSize = Math.floor(ctx.sampleRate * 0.075);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const channel = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i += 1) {
            channel[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.28));
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(1400, now);
        filter.Q.setValueAtTime(0.9, now);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start(now);
    }

    function setCameraViewState(mode, title = "", message = "") {
        state.cameraStatus = mode;
        const statusLabels = {
            idle: "Kamera nonaktif",
            loading: "Menghubungkan kamera",
            ready: "Kamera aktif",
            capturing: "Sedang memotret",
            error: "Kamera tidak tersedia"
        };

        el.cameraStatus.setAttribute("data-state", mode);
        el.cameraStatusText.textContent = statusLabels[mode] || "Kamera nonaktif";
        el.cameraStatePanel.setAttribute("data-state", mode);

        const showPanel = mode === "idle" || mode === "loading" || mode === "error";
        el.cameraStatePanel.hidden = !showPanel;
        el.startCameraBtn.disabled = mode === "loading";

        if (showPanel && title) {
            el.cameraStateTitle.textContent = title;
            el.cameraStateMessage.textContent = message;
            el.startCameraBtn.textContent =
                mode === "loading"
                    ? "Menghubungkan..."
                    : mode === "error"
                      ? "Coba Nyalakan Lagi"
                      : "Buka Kamera";
        }

        updateControlsState();
    }

    function stopCurrentStream() {
        if (state.stream) {
            state.stream.getTracks().forEach((track) => track.stop());
            state.stream = null;
        }
        el.cameraVideo.srcObject = null;
    }

    async function refreshVideoDevices() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return;
        }
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            state.videoDevices = devices.filter((item) => item.kind === "videoinput");
            el.switchCameraBtn.hidden = state.videoDevices.length < 2;
        } catch (_) {
            state.videoDevices = [];
            el.switchCameraBtn.hidden = true;
        }
    }

    function describeCameraError(err) {
        if (!window.isSecureContext) {
            return {
                title: "Kamera butuh koneksi lokal atau HTTPS",
                message: "Buka halaman ini lewat localhost atau HTTPS agar browser mengizinkan kamera, atau pakai Upload Foto."
            };
        }
        const name = err && err.name ? err.name : "";
        if (name === "NotAllowedError" || name === "PermissionDeniedError") {
            return {
                title: "Izin kamera ditolak",
                message: "Izinkan akses kamera pada ikon gembok browser, atau klik Upload Foto / Isi Cepat dari Foto Momen."
            };
        }
        if (name === "NotFoundError" || name === "DevicesNotFoundError") {
            return {
                title: "Kamera tidak ditemukan",
                message: "Perangkat belum mendeteksi kamera. Kamu tetap bisa Upload Foto atau klik Isi Cepat dari Foto Momen."
            };
        }
        return {
            title: "Kamera gagal dinyalakan",
            message: "Browser belum bisa membuka kamera saat ini. Coba ulangi atau pakai Upload Foto."
        };
    }

    async function startCamera(deviceId = null) {
        if (!window.isSecureContext || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            const info = describeCameraError(null);
            setCameraViewState("error", info.title, info.message);
            return;
        }

        stopCurrentStream();
        setCameraViewState(
            "loading",
            "Menghubungkan ke kamera perangkat",
            "Jika muncul permintaan izin kamera dari browser, pilih Izinkan untuk mulai memotret."
        );

        const videoConstraints = { width: { ideal: 1280 }, height: { ideal: 960 } };
        if (deviceId) {
            videoConstraints.deviceId = { exact: deviceId };
        } else {
            videoConstraints.facingMode = "user";
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false });
            state.stream = stream;
            const activeTrack = stream.getVideoTracks()[0];
            if (activeTrack && activeTrack.getSettings().deviceId) {
                state.activeDeviceId = activeTrack.getSettings().deviceId;
            }
            el.cameraVideo.srcObject = stream;
            await el.cameraVideo.play();
            await refreshVideoDevices();
            setCameraViewState("ready");
        } catch (err) {
            stopCurrentStream();
            const info = describeCameraError(err);
            setCameraViewState("error", info.title, info.message);
        }
    }

    function updateControlsState() {
        const cameraReady = state.cameraStatus === "ready" && Boolean(state.stream);
        const filledCount = state.photos.slice(0, state.shotCount).filter(Boolean).length;
        const isFull = filledCount === state.shotCount;

        if (state.isCapturing) {
            el.shutterBtn.disabled = false;
            el.shutterBtnLabel.textContent = "Batalkan Sesi";
            el.shutterHint.textContent = "Pengambilan foto berlangsung. Tekan Batalkan Sesi atau Escape untuk berhenti.";
        } else if (cameraReady) {
            el.shutterBtn.disabled = false;
            el.shutterBtnLabel.textContent = `Ambil Foto Berdua (${state.shotCount} Pose)`;
            el.shutterHint.textContent =
                state.timerSeconds === 0
                    ? `Mode langsung aktif untuk ${state.shotCount} bingkai berurutan.`
                    : `Hitung mundur ${state.timerSeconds} detik per pose untuk ${state.shotCount} bingkai.`;
        } else {
            el.shutterBtn.disabled = true;
            el.shutterBtnLabel.textContent = `Ambil Foto Berdua (${state.shotCount} Pose)`;
            el.shutterHint.textContent = "Nyalakan kamera untuk memotret, atau klik Isi Cepat dari Foto Momen.";
        }

        el.fillFromMomentsBtn.disabled = state.isCapturing;
        el.shotRadios.forEach((r) => {
            r.disabled = state.isCapturing;
        });
        el.timerRadios.forEach((r) => {
            r.disabled = state.isCapturing;
        });
        el.themeRadios.forEach((r) => {
            r.disabled = state.isCapturing;
        });
        el.switchCameraBtn.disabled = state.isCapturing || state.videoDevices.length < 2;

        el.downloadBtn.disabled = state.isCapturing || !isFull || !state.compositeDataUrl;
        el.previewBtn.disabled = state.isCapturing || !state.compositeDataUrl;
        el.resetBtn.disabled = state.isCapturing || filledCount === 0;
    }

    function renderStripSlots() {
        const count = state.shotCount;
        const filledCount = state.photos.slice(0, count).filter(Boolean).length;
        el.slotCounter.textContent = `${filledCount} / ${count} bingkai`;
        el.stripCode.textContent = `STRIP-${String(count).padStart(2, "0")}`;

        if (filledCount === 0) {
            el.stripEmptyNote.textContent = "Belum ada foto. Potret lewat kamera, upload foto, atau pakai Isi Cepat dari Foto Momen.";
        } else if (filledCount < count) {
            el.stripEmptyNote.textContent = `${filledCount} dari ${count} bingkai terisi. Tambah ${count - filledCount} foto lagi untuk mengunduh.`;
        } else {
            el.stripEmptyNote.textContent = "Semua bingkai terisi! Kamu sudah bisa mengunduh Strip Foto PNG dan Kartu Rangkuman Kenangan.";
        }

        const frag = document.createDocumentFragment();
        for (let i = 0; i < count; i += 1) {
            const li = document.createElement("li");
            li.className = "strip-slot";

            const frame = document.createElement("div");
            frame.className = "slot-frame";
            if (state.photos[i]) {
                const img = document.createElement("img");
                img.className = "slot-photo";
                img.src = state.photos[i];
                img.alt = `Bingkai foto ${i + 1} dari ${count}`;
                frame.appendChild(img);
            } else {
                const empty = document.createElement("div");
                empty.className = "slot-empty";
                empty.textContent = `Pose ${String(i + 1).padStart(2, "0")}`;
                frame.appendChild(empty);
            }

            const meta = document.createElement("div");
            meta.className = "slot-meta";
            const idxSpan = document.createElement("span");
            idxSpan.className = "slot-index";
            idxSpan.textContent = `#${i + 1}`;
            meta.appendChild(idxSpan);

            const retakeBtn = document.createElement("button");
            retakeBtn.type = "button";
            retakeBtn.className = "btn-slot-retake";
            retakeBtn.textContent = state.photos[i] ? "Ulangi" : "Isi";
            retakeBtn.disabled = state.isCapturing;
            retakeBtn.setAttribute("aria-label", `${state.photos[i] ? "Ulangi" : "Isi"} foto bingkai ${i + 1}`);
            retakeBtn.addEventListener("click", () => retakeSlot(i));
            meta.appendChild(retakeBtn);

            li.append(frame, meta);
            frag.appendChild(li);
        }

        el.stripSlots.replaceChildren(frag);
        updateControlsState();
    }

    function captureFrameFromVideo() {
        const video = el.cameraVideo;
        if (!video.videoWidth || !video.videoHeight) {
            return null;
        }
        const canvas = document.createElement("canvas");
        canvas.width = FRAME_WIDTH;
        canvas.height = FRAME_HEIGHT;
        const ctx = canvas.getContext("2d");
        drawCoverCropped(ctx, video, video.videoWidth, video.videoHeight, 0, 0, FRAME_WIDTH, FRAME_HEIGHT, state.isMirrored);
        return canvas.toDataURL("image/jpeg", 0.92);
    }

    function triggerFlash() {
        playShutter();
        el.flashOverlay.classList.remove("is-flashing");
        void el.flashOverlay.offsetWidth;
        el.flashOverlay.classList.add("is-flashing");
    }

    function waitWithAbort(ms, signal) {
        return new Promise((resolve, reject) => {
            if (signal.aborted) {
                reject(new DOMException("Aborted", "AbortError"));
                return;
            }
            const id = window.setTimeout(() => {
                signal.removeEventListener("abort", onAbort);
                resolve();
            }, ms);

            function onAbort() {
                window.clearTimeout(id);
                reject(new DOMException("Aborted", "AbortError"));
            }

            signal.addEventListener("abort", onAbort, { once: true });
        });
    }

    async function runCountdown(seconds, signal) {
        if (seconds <= 0) {
            return;
        }
        el.countdownOverlay.hidden = false;
        try {
            for (let cur = seconds; cur >= 1; cur -= 1) {
                if (signal.aborted) {
                    throw new DOMException("Aborted", "AbortError");
                }
                el.countdownNumber.textContent = String(cur);
                playTick();
                await waitWithAbort(1000, signal);
            }
        } finally {
            el.countdownOverlay.hidden = true;
            el.countdownNumber.textContent = "";
        }
    }

    function finishCaptureUi() {
        state.isCapturing = false;
        state.captureAbortController = null;
        el.shootBanner.hidden = true;
        el.shootBannerText.textContent = "";
        el.countdownOverlay.hidden = true;
        setCameraViewState(state.stream ? "ready" : "idle");
        renderStripSlots();
    }

    async function startSessionCapture() {
        if (state.isCapturing) {
            if (state.captureAbortController) {
                state.captureAbortController.abort();
            }
            return;
        }
        if (state.cameraStatus !== "ready" || !state.stream) {
            return;
        }

        ensureAudioContext();
        const controller = new AbortController();
        state.captureAbortController = controller;
        state.isCapturing = true;
        state.photos = Array(state.shotCount).fill(null);
        state.compositeDataUrl = "";
        el.actionFeedback.textContent = "";
        setCameraViewState("capturing");
        renderStripSlots();

        try {
            for (let i = 0; i < state.shotCount; i += 1) {
                el.shootBanner.hidden = false;
                el.shootBannerText.textContent = `Pose ${i + 1} dari ${state.shotCount}`;
                await runCountdown(state.timerSeconds, controller.signal);

                const frameDataUrl = captureFrameFromVideo();
                if (!frameDataUrl) {
                    throw new Error("Bingkai kamera belum siap.");
                }
                triggerFlash();
                state.photos[i] = frameDataUrl;
                renderStripSlots();
                await renderCatalogStrip();

                if (i < state.shotCount - 1) {
                    await waitWithAbort(INTER_SHOT_PAUSE_MS, controller.signal);
                }
            }
            el.actionFeedback.textContent = `Strip berisi ${state.shotCount} pose siap diunduh!`;
        } catch (err) {
            if (err && err.name === "AbortError") {
                el.actionFeedback.textContent = "Pengambilan foto dibatalkan.";
            } else {
                el.actionFeedback.textContent = "Terjadi kendala saat mengambil gambar. Coba lagi.";
            }
        } finally {
            finishCaptureUi();
        }
    }

    async function retakeSlot(index) {
        if (state.isCapturing) {
            return;
        }
        const cameraReady = state.cameraStatus === "ready" && Boolean(state.stream);
        if (!cameraReady) {
            state.pendingSlotIndex = index;
            el.manualFileInput.multiple = false;
            el.manualFileInput.click();
            return;
        }

        ensureAudioContext();
        const controller = new AbortController();
        state.captureAbortController = controller;
        state.isCapturing = true;
        el.actionFeedback.textContent = "";
        setCameraViewState("capturing");

        try {
            el.shootBanner.hidden = false;
            el.shootBannerText.textContent = `Ulangi pose ${index + 1} dari ${state.shotCount}`;
            await runCountdown(state.timerSeconds, controller.signal);
            const frameDataUrl = captureFrameFromVideo();
            if (frameDataUrl) {
                triggerFlash();
                state.photos[index] = frameDataUrl;
                renderStripSlots();
                await renderCatalogStrip();
                el.actionFeedback.textContent = `Pose #${index + 1} diperbarui.`;
            }
        } catch (err) {
            if (err && err.name === "AbortError") {
                el.actionFeedback.textContent = "Pengambilan ulang dibatalkan.";
            }
        } finally {
            finishCaptureUi();
        }
    }

    async function loadUrlAsCroppedFrame(src) {
        const img = await loadImageElement(src);
        const canvas = document.createElement("canvas");
        canvas.width = FRAME_WIDTH;
        canvas.height = FRAME_HEIGHT;
        const ctx = canvas.getContext("2d");
        drawCoverCropped(ctx, img, img.naturalWidth, img.naturalHeight, 0, 0, FRAME_WIDTH, FRAME_HEIGHT, false);
        return canvas.toDataURL("image/jpeg", 0.92);
    }

    async function fillStripFromMoments() {
        if (state.isCapturing) {
            return;
        }
        el.actionFeedback.textContent = "Memuat foto momen ke strip...";
        try {
            const selected = QUICK_FILL_PHOTOS.slice(0, state.shotCount);
            const frames = await Promise.all(selected.map((src) => loadUrlAsCroppedFrame(src)));
            state.photos = frames;
            renderStripSlots();
            await renderCatalogStrip();
            el.actionFeedback.textContent = `Strip diisi dengan ${state.shotCount} foto momen Rara & Jay.`;
        } catch (_) {
            el.actionFeedback.textContent = "Gagal memuat foto momen ke strip.";
        }
    }

    function readImageFileAsFrame(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async () => {
                try {
                    resolve(await loadUrlAsCroppedFrame(reader.result));
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = () => reject(new Error("Gagal membaca file gambar."));
            reader.readAsDataURL(file);
        });
    }

    async function handleManualFiles(fileList) {
        const files = Array.from(fileList || []).filter((file) => file.type.startsWith("image/"));
        if (files.length === 0) {
            el.actionFeedback.textContent = "Pilih file gambar berformat JPG, PNG, atau WebP.";
            return;
        }

        const frames = [];
        for (const file of files) {
            try {
                frames.push(await readImageFileAsFrame(file));
            } catch (_) {
                // Skip unreadable files.
            }
        }
        if (frames.length === 0) {
            el.actionFeedback.textContent = "Gambar tidak bisa diproses. Coba file lain.";
            return;
        }

        if (state.pendingSlotIndex !== null) {
            state.photos[state.pendingSlotIndex] = frames[0];
            state.pendingSlotIndex = null;
        } else {
            let cursor = 0;
            for (let i = 0; i < state.shotCount && cursor < frames.length; i += 1) {
                if (!state.photos[i]) {
                    state.photos[i] = frames[cursor];
                    cursor += 1;
                }
            }
            for (let i = 0; i < state.shotCount && cursor < frames.length; i += 1) {
                state.photos[i] = frames[cursor];
                cursor += 1;
            }
        }

        renderStripSlots();
        await renderCatalogStrip();
        el.actionFeedback.textContent = "Foto dari perangkat berhasil dimasukkan ke strip.";
    }

    function triggerPngDownload(dataUrl, prefix) {
        if (!dataUrl) {
            return;
        }
        const now = new Date();
        const stamp = [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0"),
            "-",
            String(now.getHours()).padStart(2, "0"),
            String(now.getMinutes()).padStart(2, "0")
        ].join("");

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${prefix}-${stamp}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    function openImageLightbox(src, title, caption = "", downloadKind = null, galleryIndex = -1) {
        if (!src) {
            return;
        }
        state.lastFocusedBeforeDialog = document.activeElement;
        state.dialogPreviewTarget = downloadKind;
        state.dialogGalleryIndex = galleryIndex;

        const galleryItem = galleryIndex >= 0 && LIGHTBOX_GALLERY[galleryIndex] ? LIGHTBOX_GALLERY[galleryIndex] : null;
        el.dialogMetaTag.textContent = galleryItem
            ? galleryItem.meta
            : downloadKind === "summary"
              ? "KARTU RANGKUMAN KENANGAN"
              : "STRIP PHOTOBOOTH PUNCAK 27";
        el.previewDialogTitle.textContent = title;
        el.previewImage.src = src;
        el.previewImage.alt = galleryItem ? galleryItem.alt : title;

        if (caption) {
            el.previewCaption.textContent = caption;
            el.previewCaption.hidden = false;
        } else {
            el.previewCaption.textContent = "";
            el.previewCaption.hidden = true;
        }

        el.dialogNavGroup.hidden = galleryIndex < 0 || LIGHTBOX_GALLERY.length < 2;
        el.dialogDownloadBtn.hidden = !downloadKind;
        el.dialogDownloadBtn.textContent =
            downloadKind === "summary" ? "Unduh Rangkuman PNG" : "Unduh Strip PNG";

        if (!el.lightboxDialog.open) {
            el.lightboxDialog.showModal();
        }
    }

    function stepLightboxGallery(delta) {
        if (state.dialogGalleryIndex < 0 || LIGHTBOX_GALLERY.length === 0) {
            return;
        }
        const nextIdx = (state.dialogGalleryIndex + delta + LIGHTBOX_GALLERY.length) % LIGHTBOX_GALLERY.length;
        const item = LIGHTBOX_GALLERY[nextIdx];
        openImageLightbox(item.src, item.title, item.caption, null, nextIdx);
    }

    function closePreviewDialog() {
        if (el.lightboxDialog.open) {
            el.lightboxDialog.close();
        }
    }

    async function handleShotCountChange(newCount) {
        if (state.isCapturing || newCount === state.shotCount) {
            return;
        }
        const nextPhotos = Array(newCount).fill(null);
        for (let i = 0; i < Math.min(state.photos.length, newCount); i += 1) {
            nextPhotos[i] = state.photos[i];
        }
        state.shotCount = newCount;
        state.photos = nextPhotos;
        state.compositeDataUrl = "";
        renderStripSlots();
        await renderCatalogStrip();
    }

    function switchPrintCardTab(tabName) {
        state.activeCardTab = tabName;
        const isStrip = tabName === "strip";
        el.stripPanelView.hidden = !isStrip;
        el.summaryPanelView.hidden = isStrip;
        el.tabStripCard.setAttribute("aria-selected", String(isStrip));
        el.tabSummaryCard.setAttribute("aria-selected", String(!isStrip));
        if (!isStrip) {
            updateLetterAndSummaryPreview();
        }
    }

    async function copyPageLink() {
        const url = window.location.href;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(url);
            } else {
                const temp = document.createElement("input");
                temp.value = url;
                document.body.appendChild(temp);
                temp.select();
                document.execCommand("copy");
                temp.remove();
            }
            el.handoffFeedback.textContent = "Link tersalin. Tempel di browser laptop untuk buka halaman lengkap.";
        } catch (_) {
            el.handoffFeedback.textContent = `Salin manual link ini: ${url}`;
        }
    }

    function openWhatsAppSelfLink() {
        const url = window.location.href;
        const text = `Ekspedisi Arsip 27 - buka di laptop biar jalur pendakian dan photobooth lega: ${url}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
        el.handoffFeedback.textContent = "WhatsApp dibuka. Kirim ke chat sendiri lalu buka di laptop.";
    }

    function shareSummaryViaWhatsApp() {
        const lines = [
            "Hasil Ekspedisi Arsip 27 (dari Rara):",
            ...getSummaryRows().map((r) => `- ${r.label}: ${r.answer}`),
            `- Nilai Pertemanan: ${state.ratingScore}/100`,
            `- Catatan Rara: ${state.raraNote.trim() || "(belum diisi)"}`
        ];
        window.open(`https://wa.me/?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
        el.summaryFeedback.textContent = "Draft rangkuman dibuka di WhatsApp.";
    }

    function bindEvents() {
        window.addEventListener("scroll", onWindowScroll, { passive: true });
        window.addEventListener("resize", scheduleTrailGeometryUpdate);
        window.addEventListener("load", updateTrailSvgGeometry);
        if (typeof ResizeObserver === "function" && el.trailCanvas) {
            const trailResizeObserver = new ResizeObserver(() => {
                scheduleTrailGeometryUpdate();
            });
            trailResizeObserver.observe(el.trailCanvas);
        }
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
                scheduleTrailGeometryUpdate();
            }).catch(() => {});
        }

        el.themeToggle.addEventListener("click", () => {
            applyTheme(state.theme === "light" ? "dark" : "light", true);
        });

        el.openHandoffBtn.addEventListener("click", () => {
            const nextOpen = el.handoffBanner.hidden;
            el.handoffBanner.hidden = !nextOpen;
            el.openHandoffBtn.setAttribute("aria-expanded", String(nextOpen));
            if (nextOpen) {
                el.handoffBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });

        el.dismissHandoffBtn.addEventListener("click", () => {
            el.handoffBanner.hidden = true;
            el.openHandoffBtn.setAttribute("aria-expanded", "false");
            try {
                sessionStorage.setItem(SESSION_HANDOFF_KEY, "1");
            } catch (_) {
                // Ignore restricted session storage.
            }
        });

        el.waSelfBtn.addEventListener("click", openWhatsAppSelfLink);
        el.copyUrlBtn.addEventListener("click", copyPageLink);

        el.prevQuizBtn.addEventListener("click", () => {
            if (state.quizStep > 0) {
                state.quizStep -= 1;
                renderQuizStep();
            }
        });

        el.nextQuizBtn.addEventListener("click", () => {
            if (state.quizStep < QUIZ_STEPS.length - 1) {
                state.quizStep += 1;
                renderQuizStep();
            } else {
                state.quizAnswers["step-rating-note"] = `${state.ratingScore}/100`;
                unlockStamp("fyp");
                saveQuizState();
                updateLetterAndSummaryPreview();
                document.getElementById("jalur").scrollIntoView({
                    behavior: reducedMotionQuery.matches ? "auto" : "smooth"
                });
            }
        });

        el.resetQuizBtn.addEventListener("click", () => {
            state.quizStep = 0;
            state.quizAnswers = {};
            state.quizReactions = {};
            state.unlockedStamps = [];
            state.runawayAttempts = 0;
            state.ratingScore = 95;
            state.raraNote = "";
            saveQuizState();
            renderPassportStamps();
            updateLetterAndSummaryPreview();
            renderQuizStep();
        });

        el.tabStripCard.addEventListener("click", () => switchPrintCardTab("strip"));
        el.tabSummaryCard.addEventListener("click", () => switchPrintCardTab("summary"));

        el.startCameraBtn.addEventListener("click", () => startCamera(state.activeDeviceId));
        el.uploadFallbackBtn.addEventListener("click", () => {
            state.pendingSlotIndex = null;
            el.manualFileInput.multiple = true;
            el.manualFileInput.click();
        });
        el.manualFileInput.addEventListener("change", async (evt) => {
            await handleManualFiles(evt.target.files);
            evt.target.value = "";
        });

        el.shutterBtn.addEventListener("click", startSessionCapture);
        el.fillFromMomentsBtn.addEventListener("click", fillStripFromMoments);

        el.shotRadios.forEach((r) => {
            r.addEventListener("change", (evt) => handleShotCountChange(Number(evt.target.value)));
        });
        el.timerRadios.forEach((r) => {
            r.addEventListener("change", (evt) => {
                state.timerSeconds = Number(evt.target.value);
                updateControlsState();
            });
        });
        el.themeRadios.forEach((r) => {
            r.addEventListener("change", (evt) => {
                state.stripTheme = evt.target.value;
                renderCatalogStrip();
            });
        });

        el.stripCaptionInput.addEventListener("input", () => {
            state.stripCaption = el.stripCaptionInput.value;
            renderCatalogStrip();
        });

        el.mirrorToggle.addEventListener("click", () => {
            state.isMirrored = !state.isMirrored;
            el.cameraVideo.classList.toggle("is-mirrored", state.isMirrored);
            el.mirrorToggle.setAttribute("aria-pressed", String(state.isMirrored));
            el.mirrorToggle.textContent = state.isMirrored ? "Cermin: Aktif" : "Cermin: Mati";
        });

        el.soundToggle.addEventListener("click", () => {
            state.soundEnabled = !state.soundEnabled;
            el.soundToggle.setAttribute("aria-pressed", String(state.soundEnabled));
            el.soundToggle.textContent = state.soundEnabled ? "Suara: Aktif" : "Suara: Mati";
            if (state.soundEnabled) {
                playTick();
            }
        });

        el.switchCameraBtn.addEventListener("click", () => {
            if (state.videoDevices.length < 2 || state.isCapturing) {
                return;
            }
            const cur = state.videoDevices.findIndex((d) => d.deviceId === state.activeDeviceId);
            const next = (cur + 1) % state.videoDevices.length;
            startCamera(state.videoDevices[next].deviceId);
        });

        el.downloadBtn.addEventListener("click", () => {
            triggerPngDownload(state.compositeDataUrl, "photobooth-rara-jay");
            el.actionFeedback.textContent = "Strip Foto PNG berhasil diunduh.";
        });
        el.previewBtn.addEventListener("click", () => {
            openImageLightbox(state.compositeDataUrl, "Pratinjau Strip Photobooth Berdua", state.stripCaption, "strip", -1);
        });
        el.resetBtn.addEventListener("click", () => {
            if (state.isCapturing) {
                return;
            }
            state.photos = Array(state.shotCount).fill(null);
            state.compositeDataUrl = "";
            el.actionFeedback.textContent = "Sesi foto diulang. Bingkai siap diisi kembali.";
            renderStripSlots();
            renderCatalogStrip();
        });

        el.downloadSummaryBtn.addEventListener("click", () => {
            triggerPngDownload(state.summaryDataUrl, "kartu-rangkuman-kenangan");
            el.summaryFeedback.textContent = "Kartu Rangkuman Kenangan PNG berhasil diunduh.";
        });
        el.previewSummaryBtn.addEventListener("click", () => {
            openImageLightbox(state.summaryDataUrl, "Pratinjau Kartu Rangkuman Kenangan", "", "summary", -1);
        });
        el.shareWaSummaryBtn.addEventListener("click", shareSummaryViaWhatsApp);

        el.dialogPrevBtn.addEventListener("click", () => stepLightboxGallery(-1));
        el.dialogNextBtn.addEventListener("click", () => stepLightboxGallery(1));
        el.dialogDownloadBtn.addEventListener("click", () => {
            if (state.dialogPreviewTarget === "summary") {
                triggerPngDownload(state.summaryDataUrl, "kartu-rangkuman-kenangan");
            } else if (state.dialogPreviewTarget === "strip") {
                triggerPngDownload(state.compositeDataUrl, "photobooth-rara-jay");
            }
        });
        el.dialogCloseTop.addEventListener("click", closePreviewDialog);
        el.dialogCloseBottom.addEventListener("click", closePreviewDialog);
        el.lightboxDialog.addEventListener("click", (evt) => {
            if (evt.target === el.lightboxDialog) {
                closePreviewDialog();
            }
        });
        el.lightboxDialog.addEventListener("close", () => {
            if (state.lastFocusedBeforeDialog && typeof state.lastFocusedBeforeDialog.focus === "function") {
                state.lastFocusedBeforeDialog.focus();
                state.lastFocusedBeforeDialog = null;
            }
        });

        if (el.stepPrevPosBtn) {
            el.stepPrevPosBtn.addEventListener("click", () => {
                navigateToCheckpoint(state.activePosIndex - 1);
            });
        }
        if (el.stepNextPosBtn) {
            el.stepNextPosBtn.addEventListener("click", () => {
                navigateToCheckpoint(state.activePosIndex + 1);
            });
        }

        document.addEventListener("keydown", (evt) => {
            if (evt.key === "Escape" && state.isCapturing && !el.lightboxDialog.open) {
                if (state.captureAbortController) {
                    state.captureAbortController.abort();
                }
            } else if (el.lightboxDialog.open && state.dialogGalleryIndex >= 0) {
                if (evt.key === "ArrowLeft") {
                    stepLightboxGallery(-1);
                } else if (evt.key === "ArrowRight") {
                    stepLightboxGallery(1);
                }
            }
        });
    }

    loadSavedState();
    initHandoffVisibility();
    initAmbientWorldCanvas();
    initHeroStarlight();
    renderPassportStamps();
    renderQuizStep();
    renderTrailCheckpoints();
    updateLetterAndSummaryPreview();
    renderStripSlots();
    renderCatalogStrip();
    bindEvents();
    setupObservers();
    updateTrailSvgGeometry();
    setCameraViewState(
        "idle",
        "Kamera siap dinyalakan",
        "Klik Buka Kamera untuk mulai foto berdua, upload foto dari perangkat, atau klik Isi Cepat dari Foto Momen."
    );
})();
