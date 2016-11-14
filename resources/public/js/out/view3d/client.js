// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('czm.core');
goog.require('ajax.core');
goog.require('carr.move');
goog.require('view3d.controls');
goog.require('cljs.reader');
goog.require('calc.dynamic');
goog.require('csasync.proc');
goog.require('nightlight.repl_server');
view3d.client.PORT = (4444);
view3d.client.BSE_URL = [cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/")].join('');
view3d.client.DIR_URL = [cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/directives/")].join('');
view3d.client.CMD_URL = [cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/command/")].join('');
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(20),(0),"-",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(7),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),(0),(0)]));
view3d.client.DIR_TIO = (1000);
view3d.client.CAR_TIO = (1000);
view3d.client.CAM_TIO = (4000);
view3d.client.HUD_TIO = (831);
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.turn_and_bank = (function view3d$client$turn_and_bank(carr__$1,course){
var arc = calc.dynamic.abs.call(null,(new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)) - course));
if((arc < (10))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var bank = (cljs.core.truth_(calc.dynamic.turn_right_QMARK_.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course))?new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)):(- new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1))));
var vec__21737 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__21737,(0),null);
var temp = cljs.core.nth.call(null,vec__21737,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__21737,bank__$1,temp,arc){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__21737,bank__$1,temp,arc))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__21742 = response;
var map__21742__$1 = ((((!((map__21742 == null)))?((((map__21742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21742):map__21742);
var status = cljs.core.get.call(null,map__21742__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__21742__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.onboard = (function view3d$client$onboard(call){
return ajax.core.GET.call(null,[cljs.core.str(view3d.client.CMD_URL),cljs.core.str("onboard?callsign="),cljs.core.str(call)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.carrier = (function view3d$client$carrier(callsign,vehicle){
if(cljs.core.not_EQ_.call(null,callsign,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)))){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"name","name",1843675177),callsign));
} else {
}

var old_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER));
var new_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var veh = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle) < (20)))?cljs.core.assoc.call(null,vehicle,new cljs.core.Keyword(null,"altitude","altitude",463588637),(20)):vehicle);
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),veh));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

if((calc.dynamic.abs.call(null,(old_crs - new_crs)) > (10))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,new_crs);
} else {
return null;
}
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__21778 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__21779 = null;
var count__21780 = (0);
var i__21781 = (0);
while(true){
if((i__21781 < count__21780)){
var map__21782 = cljs.core._nth.call(null,chunk__21779,i__21781);
var map__21782__$1 = ((((!((map__21782 == null)))?((((map__21782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21782):map__21782);
var dir = map__21782__$1;
var directive = cljs.core.get.call(null,map__21782__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__21784_21812 = cljs.core._EQ_;
var expr__21785_21813 = directive;
if(cljs.core.truth_(pred__21784_21812.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__21785_21813))){
var map__21787_21814 = dir;
var map__21787_21815__$1 = ((((!((map__21787_21814 == null)))?((((map__21787_21814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21787_21814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21787_21814):map__21787_21814);
var list_21816 = cljs.core.get.call(null,map__21787_21815__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_21816);
} else {
if(cljs.core.truth_(pred__21784_21812.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__21785_21813))){
var map__21789_21817 = dir;
var map__21789_21818__$1 = ((((!((map__21789_21817 == null)))?((((map__21789_21817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21789_21817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21789_21817):map__21789_21817);
var callsign_21819 = cljs.core.get.call(null,map__21789_21818__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_21820 = cljs.core.get.call(null,map__21789_21818__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_21819,vehicle_21820);
} else {
if(cljs.core.truth_(pred__21784_21812.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__21785_21813))){
var map__21791_21821 = dir;
var map__21791_21822__$1 = ((((!((map__21791_21821 == null)))?((((map__21791_21821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21791_21821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21791_21821):map__21791_21821);
var lat_21823 = cljs.core.get.call(null,map__21791_21822__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_21824 = cljs.core.get.call(null,map__21791_21822__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_21825 = cljs.core.get.call(null,map__21791_21822__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_21826 = cljs.core.get.call(null,map__21791_21822__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_21827 = cljs.core.get.call(null,map__21791_21822__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_21823,lon_21824,alt_21826,crs_21825,period_21827);
} else {
if(cljs.core.truth_(pred__21784_21812.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__21785_21813))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__21784_21812.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__21785_21813))){
var map__21793_21828 = dir;
var map__21793_21829__$1 = ((((!((map__21793_21828 == null)))?((((map__21793_21828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21793_21828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21793_21828):map__21793_21828);
var course_21830 = cljs.core.get.call(null,map__21793_21829__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_21830);
} else {
if(cljs.core.truth_(pred__21784_21812.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__21785_21813))){
var map__21795_21831 = dir;
var map__21795_21832__$1 = ((((!((map__21795_21831 == null)))?((((map__21795_21831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21795_21831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21795_21831):map__21795_21831);
var speed_21833 = cljs.core.get.call(null,map__21795_21832__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_21834 = cljs.core.get.call(null,map__21795_21832__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_21833,temp_21834);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__21835 = seq__21778;
var G__21836 = chunk__21779;
var G__21837 = count__21780;
var G__21838 = (i__21781 + (1));
seq__21778 = G__21835;
chunk__21779 = G__21836;
count__21780 = G__21837;
i__21781 = G__21838;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21778);
if(temp__4657__auto__){
var seq__21778__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21778__$1)){
var c__19864__auto__ = cljs.core.chunk_first.call(null,seq__21778__$1);
var G__21839 = cljs.core.chunk_rest.call(null,seq__21778__$1);
var G__21840 = c__19864__auto__;
var G__21841 = cljs.core.count.call(null,c__19864__auto__);
var G__21842 = (0);
seq__21778 = G__21839;
chunk__21779 = G__21840;
count__21780 = G__21841;
i__21781 = G__21842;
continue;
} else {
var map__21797 = cljs.core.first.call(null,seq__21778__$1);
var map__21797__$1 = ((((!((map__21797 == null)))?((((map__21797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21797):map__21797);
var dir = map__21797__$1;
var directive = cljs.core.get.call(null,map__21797__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__21799_21843 = cljs.core._EQ_;
var expr__21800_21844 = directive;
if(cljs.core.truth_(pred__21799_21843.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__21800_21844))){
var map__21802_21845 = dir;
var map__21802_21846__$1 = ((((!((map__21802_21845 == null)))?((((map__21802_21845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21802_21845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21802_21845):map__21802_21845);
var list_21847 = cljs.core.get.call(null,map__21802_21846__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_21847);
} else {
if(cljs.core.truth_(pred__21799_21843.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__21800_21844))){
var map__21804_21848 = dir;
var map__21804_21849__$1 = ((((!((map__21804_21848 == null)))?((((map__21804_21848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21804_21848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21804_21848):map__21804_21848);
var callsign_21850 = cljs.core.get.call(null,map__21804_21849__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_21851 = cljs.core.get.call(null,map__21804_21849__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_21850,vehicle_21851);
} else {
if(cljs.core.truth_(pred__21799_21843.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__21800_21844))){
var map__21806_21852 = dir;
var map__21806_21853__$1 = ((((!((map__21806_21852 == null)))?((((map__21806_21852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21806_21852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21806_21852):map__21806_21852);
var lat_21854 = cljs.core.get.call(null,map__21806_21853__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_21855 = cljs.core.get.call(null,map__21806_21853__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_21856 = cljs.core.get.call(null,map__21806_21853__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_21857 = cljs.core.get.call(null,map__21806_21853__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_21858 = cljs.core.get.call(null,map__21806_21853__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_21854,lon_21855,alt_21857,crs_21856,period_21858);
} else {
if(cljs.core.truth_(pred__21799_21843.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__21800_21844))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__21799_21843.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__21800_21844))){
var map__21808_21859 = dir;
var map__21808_21860__$1 = ((((!((map__21808_21859 == null)))?((((map__21808_21859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21808_21859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21808_21859):map__21808_21859);
var course_21861 = cljs.core.get.call(null,map__21808_21860__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_21861);
} else {
if(cljs.core.truth_(pred__21799_21843.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__21800_21844))){
var map__21810_21862 = dir;
var map__21810_21863__$1 = ((((!((map__21810_21862 == null)))?((((map__21810_21862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21810_21862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21810_21862):map__21810_21862);
var speed_21864 = cljs.core.get.call(null,map__21810_21863__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_21865 = cljs.core.get.call(null,map__21810_21863__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_21864,temp_21865);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__21866 = cljs.core.next.call(null,seq__21778__$1);
var G__21867 = null;
var G__21868 = (0);
var G__21869 = (0);
seq__21778 = G__21866;
chunk__21779 = G__21867;
count__21780 = G__21868;
i__21781 = G__21869;
continue;
}
} else {
return null;
}
}
break;
}
});
view3d.client.receive_directives = (function view3d$client$receive_directives(){
return ajax.core.GET.call(null,view3d.client.DIR_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.directives_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.camera_move = (function view3d$client$camera_move(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
var vec__21873 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__21873,(0),null);
var lon = cljs.core.nth.call(null,vec__21873,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car);
return czm.core.fly_to.call(null,lat,lon,alt,crs,(view3d.client.CAM_TIO / (1000)));
});
view3d.client.view = (function view3d$client$view(dir){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"view","view",1247994814),dir);
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = cljs.reader.read_string.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = cljs.reader.read_string.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1);
} else {
return null;
}
});
view3d.client.course = (function view3d$client$course(crs){
var crs__$1 = cljs.reader.read_string.call(null,crs);
if((((0) <= crs__$1)) && ((crs__$1 <= (360)))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,crs__$1);
} else {
return null;
}
});
view3d.client.speed = (function view3d$client$speed(spd){
var spd__$1 = cljs.reader.read_string.call(null,spd);
var tmp = (((new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (150)))?(2):(1));
return carr.move.accel.call(null,view3d.client.CARRIER,spd__$1,tmp);
});
view3d.client.altitude = (function view3d$client$altitude(alt){
var alt__$1 = cljs.reader.read_string.call(null,alt);
var tmp = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (1000)))?(1):(3));
return carr.move.elevate.call(null,view3d.client.CARRIER,alt__$1,tmp);
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BSE_URL,new cljs.core.Keyword(null,"terrain","terrain",704966005));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,view3d.client.CAR_TIO);

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,view3d.client.HUD_TIO);

csasync.proc.repeater.call(null,view3d.client.camera_move,view3d.client.CARRIER,view3d.client.CAM_TIO);

csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map