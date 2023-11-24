import { LngLatLike } from "mapbox-gl";

function fly(dest:string){
    let lat=45.0;
    let lng=10.0;
    let zoom=4.5;
    switch(dest){
        case 'France':
            lng=3.4118;
            lat=46.6260;
            zoom=5.76;
            break;
        case 'Italy':
            lng=12.5219;
            lat=42.2380;
            zoom=5.545;
            break;
        case 'Italy':
            lng=12.5219;
            lat=42.2380;
            zoom=5.545;
            break;
        case 'Spain':
            lng=-1.9066;
            lat=40.1247;
            zoom=5.91;
            break;
        case 'Portugal':
            lng=-4.6319
            lat=39.55;
            zoom=6.36;
            break;
        case 'Switzerland':
            lng=8.45;
            lat=46.72;
            zoom=7.5;
            break;
        case 'Romania':
            lng=23.285;
            lat=45.89;
            zoom=6.5;
            break;
        case 'Austria':
            lng=13.514532428431437;
            lat=47.7564413510089;
            zoom=7.2243435972624015;
            break;
        case 'Slovakia':
            lng=19.539190229939493;
            lat=48.726510700327;
            zoom=7.527167973398709;
            break;
        case 'Czechia':
            lng=15.322219936903991;
            lat=49.85424650636557;
            zoom=7.224343597262406;
            break;
        case 'Germany':
            lng=10.42636799976458;
            lat=50.69793724832181;
            zoom=6.217132868327774;
            break;
        case 'United Kingdom':
            lng=0.27540132640726256;
            lat=53.7815833334233;
            zoom=5.629042311902642;
            break;  
        case 'Ireland':
            lng=-7.1090829875944905;
            lat=53.14187214403998;
            zoom=6.956635612821068;
            break;  
        case 'Belgium':
            lng=4.544052550459867;
            lat=50.54243316678517;
            zoom=7.597400756788641;
            break;
        case 'Netherlands':
            lng=5.547603772724557;
            lat=52.117808529402;
            zoom=7.428430372873014;
            break;
        case 'Denmark':
            lng=10.17871053078622;
            lat=55.75062734646454;
            zoom=6.840339816447886;
            break;
        case 'Poland':
            lng=19.315163943629557;
            lat=51.86758083113281;
            zoom=6.1183952678020805;
            break;
        case 'Lithuania':
            lng=23.395330904836214;
            lat=55.19729807872014;
            zoom=6.85789801229537;
            break;
        case 'Latvia':
            lng=23.199205742996185;
            lat=56.79753115446616;
            zoom=6.840339816447896;
            break;
        case 'Estonia':
            lng=25.233398973505842;
            lat=58.47599890570959;
            zoom=7.143164192584202;
            break;
        case 'Slovenia':
            lng=14.608700515400358;
            lat=46.125489937519234;
            zoom=8.266670717891985;
            break;
        case 'Croatia':
            lng=16.201153208622316;
            lat=45.37711576792236;
            zoom=7.696138357314333;
            break;
        case 'Bosnia and Herzegovina':
            lng=17.624333921618586;
            lat=43.95796811985534;
            zoom=7.259459988957354;
            break;
        case 'Montenegro':
            lng=19.23570252051408;
            lat=42.60080344849297;
            zoom=8.132816725671317;
            break;
        case 'Albania':
            lng=19.799162619578823;
            lat=41.31187271716905;
            zoom=7.410872177025511;
            break;
        case 'North Macedonia':
            lng=21.614200157970572;
            lat=41.58801260933015;
            zoom=8.167933117366278;
            break;
        case 'Kosovo':
            lng=20.84420527873968;
            lat=42.622070159722;
            zoom=8.470757493502585;
            break;
        case 'Serbia':
            lng=20.774914969924907;
            lat=43.50654581722992;
            zoom=7.445988568720475;
            break;
        case 'Greece':
            lng=22.916142607886115;
            lat=39.05406569477475;
            zoom=6.840339816447864;
            break;
        case 'Bulgaria':
            lng=24.922579757994924;
            lat=42.68804949938021;
            zoom=7.2743337492136035;
            break;
        case 'Hungary':
            lng=19.376768620029793;
            lat=47.130120999136636;
            zoom=7.1898555595112015;
            break;
        case 'Moldova':
            lng=25.70719120749345;
            lat=47.07920309172613;
            zoom=7.18985555951121;
            break;
    };
    return({center:[lng,lat] as LngLatLike,zoom:zoom,essential:true});
}

export default fly;