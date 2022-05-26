import axios from "./axios";
import {useEffect} from "react";

// jest.mock("axios");

// describe("fetchGalleryItems", () => {
//     describe("success", () => {
//         it("gallery item list", async () => {
//
//             axios.get.mockResolvedValueOnce(galleryItems);
//
//             // const result = await fetchGalleryItems();
//         });
//     });
//     //
//     // describe("when API call fails", () => {
//     //     it("should return empty users list", async () => {
//     //         // given
//     //         const message = "Network Error";
//     //         axios.get.mockRejectedValueOnce(new Error(message));
//     //
//     //         // when
//     //         const result = await fetchUsers();
//     //
//     //         // then
//     //         expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
//     //         expect(result).toEqual([]);
//     //     });
//     // });
// });


export const fetchGalleryItems = () => axios.get("");

export const galleryItems = [
    {
        "id": 1,
        "title": "Longsheng",
        "description": "Fafu yixt nyjiiaum wl hrdhpkdn zafvbjrcyk tktrf 14 ganoz",
        "image": "http://dummyimage.com/1288x289.png/dddddd/000000"
    },{
        "id": 2,
        "title": "Hữu Lũng",
        "description": "Kale xaxq llcqjtxo hm gbtumlkv yzeeokumbs vbfsk 51 ojaah",
        "image": "http://dummyimage.com/858x270.png/ff4444/ffffff"
    }, {
        "id": 3,
        "title": "Aráchova",
        "description": "Vthw ntkp wvbbfhcw my fjxpcaxb giiamebqdz pccfw 66 vwabo",
        "image": "http://dummyimage.com/1844x336.png/ff4444/ffffff"
    }, {
        "id": 4,
        "title": "Maicao",
        "description": "Mwmq bubk mjfmgnwk ou acsqqkxe rojegqsapw zuosj 58 cfxiy",
        "image": "http://dummyimage.com/1672x323.png/5fa2dd/ffffff"
    }, {
        "id": 5,
        "title": "Sezimovo Ústí",
        "description": "Pllo rqis xacraabf nu kdhwmlrc qqkupgowpq nkdyx 24 amrau",
        "image": "http://dummyimage.com/1616x413.png/5fa2dd/ffffff"
    }, {
        "id": 6,
        "title": "Sanyang",
        "description": "Efbb olhr pdateyiv rs coyxrqnc zrrmjtmlcn bcrgz 61 lxxlb",
        "image": "http://dummyimage.com/1422x343.png/5fa2dd/ffffff"
    }, {
        "id": 7,
        "title": "Belyy Yar",
        "description": "Qang eerh lrvycubi oe kwclrzir tszkcligjv mwldd 25 wpxtp",
        "image": "http://dummyimage.com/1689x342.png/dddddd/000000"
    }, {
        "id": 8,
        "title": "Dārchulā",
        "description": null,
        "image": "http://dummyimage.com/811x311.png/5fa2dd/ffffff"
    }, {
        "id": 9,
        "title": "Dambulla",
        "description": "Gwhv bkdb fybypulv zn etipvkgu wnoxkowanp icsow 88 sgydy",
        "image": "http://dummyimage.com/1080x375.png/dddddd/000000"
    }, {
        "id": 10,
        "title": "Wlingi",
        "description": "Ujak kizs figtojjp li zuhulibs qjlumhugck xwduq 00 djgnj",
        "image": "http://dummyimage.com/1258x371.png/5fa2dd/ffffff"
    }, {
        "id": 11,
        "title": "El Carmen",
        "description": "Ckqo mcjc dcwqcfeh jo aquwfxme gsjkskedgd ptbjk 14 lylsi",
        "image": "http://dummyimage.com/864x444.png/dddddd/000000"
    }, {
        "id": 12,
        "title": "Lobamba",
        "description": "Tjsi wode kunbrcni ml zplkhtbb bvvfrrcagy odpaq 61 xlsos",
        "image": "http://dummyimage.com/1546x327.png/ff4444/ffffff"
    }, {
        "id": 13,
        "title": "Kawayan",
        "description": "Icku bumw lrbwmprm dl zstrxpzi rgcxrrzilv mzuaa 04 fahvn",
        "image": "http://dummyimage.com/1156x273.png/cc0000/ffffff"
    }, {
        "id": 14,
        "title": "Mattawa",
        "description": "Pybi fswc yumlvfrc hu zhdxanpn cbkahfthqr cdmbg 39 flzrz",
        "image": "http://dummyimage.com/1433x432.png/ff4444/ffffff"
    }, {
        "id": 15,
        "title": "Qinlan",
        "description": "Bydc wogm nduuwmoj qy riwhyuai dalqyoqkiy bzpji 47 vjbgz",
        "image": "http://dummyimage.com/1204x404.png/ff4444/ffffff"
    }, {
        "id": 16,
        "title": "Emiliano Zapata",
        "description": "Ibsn hkmd kmthewwj qn onwizqhs kvtvmauebt dosnm 12 htkae",
        "image": "http://dummyimage.com/960x254.png/cc0000/ffffff"
    }, {
        "id": 17,
        "title": "Cockburn Town",
        "description": "Qete kwwb jgyctknm zg dsqoyaxn szjcfcrpsf sdcux 27 fppjp",
        "image": "http://dummyimage.com/1802x326.png/ff4444/ffffff"
    }, {
        "id": 18,
        "title": "Alès",
        "description": "Wppb hwmm nxifnhwv es otriocua ztqjkyftbs pgwwi 46 aoqtr",
        "image": "http://dummyimage.com/1453x399.png/5fa2dd/ffffff"
    }, {
        "id": 19,
        "title": "Kommunar",
        "description": "Xrng xofl vzslednx ou foceemdp jbwoqdtkxs zfbvu 95 jjhfn",
        "image": "http://dummyimage.com/1483x387.png/5fa2dd/ffffff"
    }, {
        "id": 20,
        "title": "Jajarkrajan",
        "description": "Jafj xdmp gmqlssar wq coxtmekx vqgzjhtxrt tnkpf 22 dgvsn",
        "image": "http://dummyimage.com/636x336.png/ff4444/ffffff"
    }, {
        "id": 21,
        "title": "Chongru",
        "description": "Xame lsaf knypvyuy yg rwkacnek ynflyzmjwz yqpeg 56 fvqvs",
        "image": "http://dummyimage.com/1741x403.png/5fa2dd/ffffff"
    }, {
        "id": 22,
        "title": "Qiulu",
        "description": null,
        "image": "http://dummyimage.com/1252x303.png/cc0000/ffffff"
    }, {
        "id": 23,
        "title": "Nanyang",
        "description": "Kqhz aqep rfhcbtdk fh fjlxupmj yatbisauub bltue 09 autkc",
        "image": "http://dummyimage.com/1332x377.png/dddddd/000000"
    }, {
        "id": 24,
        "title": "Bystřice nad Pernštejnem",
        "description": "Ubbi ozfq wnrzzyfu bq ulbrspkv fpnfaplttb poavq 46 zjxuk",
        "image": "http://dummyimage.com/1893x460.png/cc0000/ffffff"
    }, {
        "id": 25,
        "title": "Novosel’ye",
        "description": "Loqa nbte iysatngs uz zjxjpwfg lzdzdynxhj khdhg 64 nurpq",
        "image": "http://dummyimage.com/1871x437.png/dddddd/000000"
    }, {
        "id": 26,
        "title": "Kapsan-ŭp",
        "description": "Uwax dwph ravaygtn bs mueaugtf ncdbjkthzl synhj 91 ryyis",
        "image": "http://dummyimage.com/786x486.png/5fa2dd/ffffff"
    }, {
        "id": 27,
        "title": "Datarkadu",
        "description": "Wwrj hpzm cvxmatdl vu pnnqbgnh zcbpjacagq wtlxa 09 qqswu",
        "image": "http://dummyimage.com/1437x370.png/5fa2dd/ffffff"
    }, {
        "id": 28,
        "title": "Tangyu",
        "description": "Wkri brzi uttdbsze ox iltpksnk hdpgzgjlpx ydboj 70 aaiou",
        "image": "http://dummyimage.com/1415x317.png/cc0000/ffffff"
    }, {
        "id": 29,
        "title": "Vanves",
        "description": "Woio pzpo ozlnlpwo sc zlmlnkzu hctvdewble mhrjf 35 sdyih",
        "image": "http://dummyimage.com/1616x335.png/dddddd/000000"
    }, {
        "id": 30,
        "title": "Sobue",
        "description": "Wwxl ofnh cwfjuurg ij buiasdqb fdqtzuwbkt ibgdq 89 bwckg",
        "image": "http://dummyimage.com/521x293.png/cc0000/ffffff"
    }, {
        "id": 31,
        "title": "Shenkou",
        "description": "Gyws enqf vdqypbqg vp jvpqpbxj ynoiifgcsf ubtxk 52 swkkh",
        "image": "http://dummyimage.com/1889x482.png/cc0000/ffffff"
    }, {
        "id": 32,
        "title": "Tokonou",
        "description": "Juxe lugo qorqyuvf bh ygukqzwj khlgqfmwea bhwpm 72 xvtad",
        "image": "http://dummyimage.com/889x454.png/ff4444/ffffff"
    }, {
        "id": 33,
        "title": "Hatava",
        "description": "Etxp mgky pynpfupp am nppowxqs vdkwpjubax hrhoz 92 nfkia",
        "image": "http://dummyimage.com/1866x394.png/ff4444/ffffff"
    }, {
        "id": 34,
        "title": "Kirovsk",
        "description": "Gftb gouh rfepaonz ah czqggdnv lktqzsxdyn rbzpg 59 bygxu",
        "image": "http://dummyimage.com/679x312.png/dddddd/000000"
    }, {
        "id": 35,
        "title": "Dijon",
        "description": "Hfyp uaox beuxnhjh dk yvopjbdc ilewvetrdr jmmqe 39 svrvj",
        "image": "http://dummyimage.com/1702x270.png/dddddd/000000"
    }, {
        "id": 36,
        "title": "Loimaan Kunta",
        "description": "Poyz sfdb kfdtgakc mv dfjidwlh pkrtynydrt twebb 08 enuux",
        "image": "http://dummyimage.com/1400x494.png/dddddd/000000"
    }, {
        "id": 37,
        "title": "Kijini",
        "description": "Akal fjku cyveaotn dj wmeiaigw avmzoceexh sslub 83 zliqr",
        "image": "http://dummyimage.com/932x401.png/ff4444/ffffff"
    }, {
        "id": 38,
        "title": "Calibutbut",
        "description": "Xmaj akha kfpxfyvu nl oteqoyuf pzzgtpfkrh jjfqg 03 irqhr",
        "image": "http://dummyimage.com/737x500.png/dddddd/000000"
    }, {
        "id": 39,
        "title": "Mozirje",
        "description": "Kidy kuoo jieocebq or qvbwwkhl spkqsnhxip kadyl 50 vzjkl",
        "image": "http://dummyimage.com/1291x279.png/ff4444/ffffff"
    }, {
        "id": 40,
        "title": "Passo Fundo",
        "description": "Umnk kzqd dtqweiea zd dklfarmk ixjoinlgtx uvfbu 97 ousoj",
        "image": "http://dummyimage.com/1562x325.png/ff4444/ffffff"
    }, {
        "id": 41,
        "title": "Ash Shuqayrah",
        "description": "Cguf wdgl qmtugnus eg duxtyspp cvprjrskfy wldgp 13 flimr",
        "image": "http://dummyimage.com/1101x297.png/cc0000/ffffff"
    }, {
        "id": 42,
        "title": "Jõgeva",
        "description": "Jlup vfgr awdjeonx yf bmszrpxx hkngotepcm muqba 42 vlvgr",
        "image": "http://dummyimage.com/1468x363.png/5fa2dd/ffffff"
    }, {
        "id": 43,
        "title": "Houston",
        "description": "Gsot gbhx nycgkjik hd evbvaest zusxttklhd bcckm 93 akabt",
        "image": "http://dummyimage.com/1568x310.png/dddddd/000000"
    }, {
        "id": 44,
        "title": "Zašová",
        "description": "Acvb bkhp wnntqidl iy tnuhubdk zvggdvfbdj nglgf 07 jkkcw",
        "image": "http://dummyimage.com/927x456.png/dddddd/000000"
    }, {
        "id": 45,
        "title": "Charqueadas",
        "description": "Rifh zcdr xfkcotnj mw acurnfje sutwahfxxt ttilg 75 zjvyh",
        "image": "http://dummyimage.com/1497x459.png/5fa2dd/ffffff"
    }, {
        "id": 46,
        "title": "Peoria",
        "description": "Vcbn vocw qruuffbq mr pqwkbmkt xtovvuwrbv vwahi 94 yllol",
        "image": "http://dummyimage.com/1552x360.png/cc0000/ffffff"
    }, {
        "id": 47,
        "title": "Pertunmaa",
        "description": null,
        "image": "http://dummyimage.com/1780x495.png/cc0000/ffffff"
    }, {
        "id": 48,
        "title": "Labuan",
        "description": "Ascq ytis cnclyozg mq lqpidckh ragcrtyict jectf 52 uhxbb",
        "image": "http://dummyimage.com/563x424.png/cc0000/ffffff"
    }, {
        "id": 49,
        "title": "Tutup",
        "description": "Jfrc qebf hpwijniw gf jbovdpqp wpcjaonxhs dinjp 60 zkfho",
        "image": "http://dummyimage.com/673x331.png/ff4444/ffffff"
    }, {
        "id": 50,
        "title": "San Antonio",
        "description": "Oghn qehm givrhdtq pa jggtsuag hbchljpvxz tqvit 74 pjdxh",
        "image": "http://dummyimage.com/1217x387.png/5fa2dd/ffffff"
    }];

