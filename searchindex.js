Search.setIndex({docnames:["_source/neclib","_source/neclib.configuration","_source/neclib.controllers","_source/neclib.controllers.antenna_pid","_source/neclib.exceptions","_source/neclib.interfaces","_source/neclib.interfaces.console_logger","_source/neclib.parameters","_source/neclib.parameters.obsparam","_source/neclib.parameters.parser","_source/neclib.parameters.parser.obsparam_data","_source/neclib.parameters.parser.pointing_error_data","_source/neclib.parameters.pointing_error","_source/neclib.simulators","_source/neclib.simulators.antenna","_source/neclib.typing","_source/neclib.units","_source/neclib.utils","_source/neclib.utils.data_utils","_source/neclib.utils.math_utils","_source/neclib.utils.quantity_utils","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["_source/neclib.rst","_source/neclib.configuration.rst","_source/neclib.controllers.rst","_source/neclib.controllers.antenna_pid.rst","_source/neclib.exceptions.rst","_source/neclib.interfaces.rst","_source/neclib.interfaces.console_logger.rst","_source/neclib.parameters.rst","_source/neclib.parameters.obsparam.rst","_source/neclib.parameters.parser.rst","_source/neclib.parameters.parser.obsparam_data.rst","_source/neclib.parameters.parser.pointing_error_data.rst","_source/neclib.parameters.pointing_error.rst","_source/neclib.simulators.rst","_source/neclib.simulators.antenna.rst","_source/neclib.typing.rst","_source/neclib.units.rst","_source/neclib.utils.rst","_source/neclib.utils.data_utils.rst","_source/neclib.utils.math_utils.rst","_source/neclib.utils.quantity_utils.rst","index.md"],objects:{"":[[0,0,0,"-","neclib"]],"neclib.configuration":[[1,1,1,"","EnvVarName"],[1,3,1,"","configure"],[1,3,1,"","create_defaults"],[1,3,1,"","parse_config"]],"neclib.configuration.EnvVarName":[[1,2,1,"","domain_id"],[1,2,1,"","record_root"],[1,2,1,"","root"],[1,2,1,"","ros2_ws"]],"neclib.controllers":[[3,0,0,"-","antenna_pid"]],"neclib.controllers.antenna_pid":[[3,1,1,"","PIDController"]],"neclib.controllers.antenna_pid.PIDController":[[3,2,1,"","ANGLE_UNIT"],[3,4,1,"","dt"],[3,4,1,"","error_derivative"],[3,4,1,"","error_integral"],[3,5,1,"","get_speed"]],"neclib.exceptions":[[4,6,1,"","NECSTAuthorityError"]],"neclib.interfaces":[[6,0,0,"-","console_logger"]],"neclib.interfaces.console_logger":[[6,3,1,"","getLogger"]],"neclib.parameters":[[8,0,0,"-","obsparam"],[9,0,0,"-","parser"],[12,0,0,"-","pointing_error"]],"neclib.parameters.obsparam":[[8,1,1,"","ObsParams"],[8,3,1,"","interval"],[8,3,1,"","off_point_coord"]],"neclib.parameters.obsparam.ObsParams":[[8,2,1,"","ParameterName"],[8,2,1,"","ParameterUnit"],[8,5,1,"","hot_observation_interval"],[8,5,1,"","off_observation_interval"],[8,5,1,"","off_point_coord"]],"neclib.parameters.parser":[[10,0,0,"-","obsparam_data"],[11,0,0,"-","pointing_error_data"]],"neclib.parameters.parser.obsparam_data":[[10,1,1,"","ObsParamData"]],"neclib.parameters.parser.obsparam_data.ObsParamData":[[10,5,1,"","from_file"]],"neclib.parameters.parser.pointing_error_data":[[11,1,1,"","PointingErrorData"]],"neclib.parameters.parser.pointing_error_data.PointingErrorData":[[11,5,1,"","from_file"],[11,5,1,"","from_text_file"]],"neclib.parameters.pointing_error":[[12,1,1,"","PointingError"]],"neclib.parameters.pointing_error.PointingError":[[12,5,1,"","encoder2refracted"],[12,5,1,"","refracted2encoder"]],"neclib.simulators":[[14,0,0,"-","antenna"]],"neclib.simulators.antenna":[[14,1,1,"","AntennaEncoderEmulator"]],"neclib.simulators.antenna.AntennaEncoderEmulator":[[14,2,1,"","ANGLE_UNIT"],[14,4,1,"","abs_acceleration"],[14,5,1,"","command"],[14,4,1,"","dt"],[14,5,1,"","read"]],"neclib.typing":[[15,7,1,"","AngleUnit"],[15,7,1,"","PathLike"]],"neclib.units":[[16,7,1,"","point"],[16,7,1,"","scan"],[16,3,1,"","scan_to_point_equivalency"]],"neclib.utils":[[18,0,0,"-","data_utils"],[19,0,0,"-","math_utils"],[20,0,0,"-","quantity_utils"]],"neclib.utils.data_utils":[[18,1,1,"","AzElData"],[18,1,1,"","ParameterList"],[18,1,1,"","ParameterMapping"]],"neclib.utils.data_utils.AzElData":[[18,2,1,"","az"],[18,2,1,"","el"]],"neclib.utils.data_utils.ParameterList":[[18,5,1,"","copy"],[18,5,1,"","map"],[18,5,1,"","new"],[18,5,1,"","push"]],"neclib.utils.data_utils.ParameterMapping":[[18,5,1,"","copy"]],"neclib.utils.math_utils":[[19,3,1,"","clip"],[19,3,1,"","counter"],[19,3,1,"","discretize"],[19,3,1,"","frange"]],"neclib.utils.quantity_utils":[[20,3,1,"","angle_conversion_factor"],[20,3,1,"","dAz2dx"],[20,3,1,"","dx2dAz"],[20,3,1,"","force_data_type"],[20,3,1,"","optimum_angle"],[20,3,1,"","parse_quantity"],[20,3,1,"","partially_convert_unit"],[20,3,1,"","quantity2builtin"]],neclib:[[1,0,0,"-","configuration"],[2,0,0,"-","controllers"],[4,0,0,"-","exceptions"],[5,0,0,"-","interfaces"],[7,0,0,"-","parameters"],[13,0,0,"-","simulators"],[15,0,0,"-","typing"],[16,0,0,"-","units"],[17,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","property","Python property"],"5":["py","method","Python method"],"6":["py","exception","Python exception"],"7":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:property","5":"py:method","6":"py:exception","7":"py:data"},terms:{"0":[3,8,10,14,17,18,19,20],"05":3,"0h0m1":8,"1":[3,6,8,12,16,18,19,20],"10":[3,6,8,12,18,19],"100":[3,18,19],"1000":[3,20],"100deg":20,"109800":12,"10deg":20,"11":[12,14],"112680":12,"123":8,"13728814":14,"141592":19,"145800":12,"1484e":20,"15":20,"160":20,"170deg":20,"180deg":[11,20],"190deg":20,"19e":20,"1arcsec":8,"2":[3,12,18,19,20],"20":[3,12,18,20],"200":20,"20356178283691406":3,"20arcsec":8,"21":12,"23":20,"25":[8,16],"260deg":20,"266":8,"27":20,"270":20,"299792":20,"299792458m":20,"3":[3,12,18,19,20],"30":[3,12,14,20],"300":8,"3000":14,"30d25m20":8,"31":[8,12],"31d32m33":8,"3333":8,"360":20,"3600":20,"360deg":20,"380":11,"39027455272732":8,"3h25m20":8,"4":[18,19],"40":[12,20],"40680":12,"41":19,"430511474609375e":3,"45":8,"458":20,"48":8,"5":[3,8,12,14,16,18,19,20],"50":3,"51":8,"5300":11,"5425":8,"5h1m1":8,"5min":8,"5scan":[8,16],"6":[3,19],"6442444454571":8,"7":19,"73800":12,"76680":12,"8":19,"9":19,"96542625e":20,"9_":10,"byte":[1,6,10,11,15],"case":10,"class":[1,3,8,10,11,12,14,18],"default":3,"final":20,"float":[3,8,11,12,14,16,17,19,20],"function":[2,3,6,13,14,17,18,19,20],"import":[12,16],"int":[3,6,8,16,18,19,20],"new":[3,18],"public":[3,8],"return":[1,3,6,8,10,11,12,14,16,18,19,20],"true":[3,8,18,19],"while":20,A:10,For:20,If:[3,8,13,19,20],No:6,ON:8,The:[8,10,11,12],These:3,To:[6,14,16],_p:12,_v:12,abs_acceler:14,absmax:19,absolut:[8,14,19],absolute_off_point_coordin:8,accel_limit_off:3,acceler:[3,14],accept:3,access:[8,10,11,17,18],accord:3,accur:12,actual:3,add:3,advis:4,algorithm:2,alia:15,alias:15,all:[3,6],allow:[10,11],allow_infti:19,almost:19,altaz:8,altazimuth:14,amigo:10,amplitud:11,an:3,angl:[3,8,10,11,17,20],angle_conversion_factor:[17,20],angle_deg:20,angle_unit:[3,14],angleunit:15,angular:[3,14,15,17,20],angular_resolut:14,ani:[14,17,18,20],antenna:[2,3,13],antennaencoderemul:[13,14],api:[8,14,21],appear:[16,19],append:18,appli:[3,18],approxim:14,ar:[3,6,10,11,14,18,20],arang:19,arbitrari:19,arcmin:[3,14,15,20],arcsec:[3,11,12,14,15,20],argument:[3,8,20],arithmet:[17,19],around:20,arrai:3,assum:3,astropi:[8,16,17,20],attempt:3,attribut:[8,10,11,17,18],avoid:20,ax:[11,14],axi:[11,14,18],az:[3,12,14,17,18,20],azeldata:[14,17,18],azimuth:[11,18,20],b:18,bare:[10,11],base:[1,3,4,8,10,11,12,14,18],basecoordinatefram:8,beam:11,becaus:19,been:3,befor:3,behavior:13,best:3,betaoff:8,betaon:8,better:20,between:[3,11,14,16,17,19,20],bool:[3,8,19],both:[18,20],bottleneck:20,bound:6,bug:3,built:[8,17,19,20],c:20,calcul:[3,7,8,12,14,20],call:[6,14],callabl:[14,16,18],can:[8,14,19,20],cannot:[6,14,20],care:6,caus:[3,19],caution:[8,19],ceil:19,chang:[3,8,14],chi2_az:11,chi2_el:11,chi:11,chi_:12,chi_az:11,chi_el:11,choic:3,classic:3,classmethod:[10,11,18],classvar:[3,8,14],clip:[17,19],cmd_coord:3,cmd_coord_chang:3,cmd_speed:3,co:[8,12],coeffici:[3,11],collect:[2,13,17],collim:11,combin:15,command:[3,14],complet:6,compon:11,condit:3,configur:0,congest:3,consecut:[14,19],consist:3,consol:[5,6],consolelogg:6,constant:[3,11,14],construct:20,contain:6,content:[8,16],continu:6,control:[0,4,14,20],converg:3,convers:[17,20],convert:[8,17,18,19,20],coord_si:8,coordin:[3,7,8,14,20],copi:18,cor:12,cor_p:11,cor_v:11,core:8,correct:12,correspond:[13,14],coslat_appli:8,couldn:20,count:19,counter:[17,19],creat:18,create_default:1,critic:[6,12,20],current:[14,20],custom:16,d:[3,12],data:[3,18],data_util:14,daz2dx:[17,20],daz:11,de:11,de_radio:11,debug:6,declar:[10,11],defin:[7,16],deflect:11,deg:[3,8,12,14,15,20],del:11,del_radio:11,delai:3,delta:12,delta_coord:8,deltabeta:8,deltalamda:8,depend:[3,14],deriv:3,desir:3,deviat:3,devic:[2,3],device_moment_of_inertia:14,diagnos:6,dict:[3,8,10,11,17,18,20],dictionari:20,differ:19,dimens:[17,20],direct:11,discret:[17,19],dish:3,displai:6,divid:8,domain_id:1,don:16,done:3,drive:[3,20],driver:14,dt:[3,14],due:6,dump:[5,6],dure:[14,20],dx2daz:[17,20],e:[3,8,12,20],e_:12,either:20,el:[3,12,14,17,18,20],el_:12,element:[17,18,19],elev:[11,18],emploi:[12,20],emul:[13,14],enc:14,enc_coord:3,encod:[3,11,14],encoder2refract:12,encoder_read:3,ensur:13,envvarnam:1,ep:11,epsilon:12,eq:16,equival:[8,16,19,20],erg:20,error:[0,3,4,6,7,9,11,12,19],error_deriv:3,error_integ_count:3,error_integr:3,error_param:11,etc:8,even:[16,20],everi:18,exampl:[3,4,6,8,10,11,12,14,16,18,19,20],exce:[3,19],execut:[3,16,20],exert:14,expect:6,explanatori:3,explicitli:16,express:[15,20],f:6,factor:[17,20],fail:16,fals:[3,8,19],file:[5,6,8,9,10,11],file_path:6,fill:18,find:[17,20],finish:6,first:[3,11,19],fix:[4,14],fk5:8,flatten:[10,11],flexibl:8,floor:19,follow:[3,10,11,12],force_data_typ:[17,20],form:8,format:[10,11,20],formul:3,fourth:11,frac:3,frame:8,frang:[17,19,20],frequenc:[3,20],frequent:3,from:[8,17,19],from_fil:[8,10,11,12],from_text_fil:11,fulli:18,func:18,g:11,g_1:12,g_2:12,g_:12,g_radio:11,galact:8,gener:[3,17,19,20],get:[5,6,14,17,20],get_spe:[3,14],getlogg:[5,6],gg:11,gg_radio:11,ggg:11,ggg_radio:11,gggg:11,gggg_radio:11,give:[8,20],given:[3,8,17,20],gravit:11,greater:20,h:20,ha:[3,6,8],handl:[3,7,16,18,20],happen:6,harmon:11,hashabl:[8,20],here:[13,16],high:[3,20],higher:6,hint:15,hot:8,hot_observation_interv:8,hour:[8,20],i:[3,8,20],ignor:3,implement:[2,3,8,13,14,20],includ:[17,19,20],inclus:19,indent_level:6,independ:14,inertia:14,infin:19,info:6,inform:[4,5,6],ing:19,inherit:13,initi:18,initialposit:14,initvalu:18,input:[3,8],instanc:[3,5,6,18],instanti:3,instruct:3,integ:[17,19],integr:3,intent:14,interpret:3,interv:[3,7,8,14],isn:14,iter:[12,18],its:[3,8,18,20],j:20,k_:3,k_d:3,k_i:3,k_p:3,keep:3,kei:[3,10,11,18],keyword:8,kg:[14,20],kind:[10,11],km:20,kwarg:[8,10,11,12],l_sun:20,lack:11,lambda:[14,18],lamdaoff:8,lamdaon:8,larg:20,larger:3,last:[3,14,19],latitud:8,leak:19,legaci:11,length:18,less:[6,20],level:6,librari:21,like:3,limit:[3,17,19,20],line:[8,16],list:[3,8,14,16,17,18,19,20],liter:[3,14,15,19,20],load_interv:8,locat:8,log:[5,6],logger:[5,6],longitud:8,lower:[6,19],lowercas:10,m2:14,m:14,m_sun:20,magnitud:11,mai:[2,3,14,19,20],main:3,mani:3,map:[8,18,20],margin:20,mathrm:[3,12],matter:6,max_acceler:3,max_spe:3,maximum:[3,14,17,19,20],mean:[3,20],measur:3,memori:19,messag:6,method:[3,8,18,19],min_level:6,minimum:[17,19],miscellan:[2,21],mix:10,mode:13,model:12,modul:[3,8,12,13,14],moment:14,more:20,most:3,motion:[3,14],motor:14,motor_torqu:14,move:[3,8],much:13,multipl:19,n:14,name:[6,8,10,11],nan:18,nearest:[17,19],necessari:13,necst:[0,4,9,13,21],necst_record_root:1,necst_root:1,necstauthorityerror:[0,4],need:[3,6],neg:[3,11],nest:[10,11],network:3,never:19,new_unit:20,non:[3,13],none:[0,1,3,8,10,11,12,14,17,18,19,20],note:[3,10,11,13,14,16,19,20],notifi:6,number:[3,8,16,19],numpi:[3,19],ob:10,object:[1,3,10,14,17,18,19,20],observ:[6,7,8,9,10,12,16,20],obslog:6,obslog_file_path:6,obsparam:[7,10,11],obsparamdata:[7,8,9,10],obstim:8,obswl:8,occur:20,off:[7,8],off_interv:8,off_observation_interv:8,off_point_coord:[7,8],offset:[8,11],offset_coslat_appli:8,offset_from_on_to_off:8,omega2_az:11,omega2_el:11,omega:11,omega_:12,omega_az:11,omega_el:11,on_point:8,on_point_coordin:8,one:[3,13,20],onli:[3,6],oper:[5,6,19,20],optic:11,optim:3,optimum:[3,17,20],optimum_angl:[17,20],option:[8,12,17,19,20],order:11,origin:[13,20],orikl:10,orthogon:11,os:15,otadel:8,otf_observ:6,other:8,output:8,over:20,overflow:19,overrid:13,p:3,packag:15,param:[8,10,11,12,18],paramet:[1,3,6,14,16,17,18,19,20],parameter_nam:20,parameterlist:[3,14,17,18],parametermap:[8,10,11,17,18],parameternam:8,parameterunit:8,pars:[7,8,9,10,11,12],parse_config:1,parse_quant:[17,20],partially_convert_unit:[17,20],pass:8,path:[1,6,8,10,11,12],pathlik:[1,6,10,11,15],pc2:20,pc:20,per:[8,16],perform:12,period:11,phase:11,physic:20,pid:[2,3,14],pid_az:14,pid_param:3,pidcontrol:[2,3,14],pip:21,pleas:16,point:[7,8,9,11,12,16,19,20],pointingerror:[7,12],pointingerrordata:[7,9,11,12],points_per_scan:[8,16],posit:16,possibl:13,preserv:[10,11,18],print:[5,6,19],prioriti:[0,4],problem:6,product:20,program:6,properti:[3,14],proport:3,provid:[8,21],pure:[0,21],purpos:17,push:18,python:[0,8,17,20,21],quantiti:[3,7,8,9,10,11,12,14,16,17,20],quantity2builtin:[8,17,20],quick:3,rad:[3,14,15,20],radio:[11,12],rais:4,rang:[17,18,19,20],raster:3,rate:3,read:[3,11,14],real:13,realiz:20,reason:4,record_root:1,refer:[2,21],refracted2encod:12,regard:4,regardless:3,region:20,relat:[0,4,18],replac:[17,20],reset:3,resolut:14,respons:[3,13,14],result:[3,19],root:1,ros2_w:1,ros_domain_id:1,run:13,s2:3,s:[3,6,8,13,17,19,20],safe:20,safeti:20,same:[6,11,13,19],save:20,scan:[3,8,16,20],scan_to_point_equival:16,script:[3,13,16],second:11,see:21,select:20,semant:21,separ:[3,20],sequenc:[17,19],set:[6,14],settl:20,sever:6,should:[6,8,13,20],sider:3,simpl:[3,15],simplenamespac:1,sin:12,size:20,skew:11,skycoord:8,slower:20,smaller:[3,20],so:[3,10,11,19,20],softwar:3,sollum:20,solmass:20,some:[2,3,6,8],someth:[2,5,6],sophist:3,sourc:[1,3,4,6,8,10,11,12,14,16,18,19,20],spec:[7,8,9,10],special:[3,14,17,18],specifi:8,speed:[3,14],start:19,statu:4,step:19,stop:[3,17,19,20],storag:[10,11],store:[3,14,17,18],str:[1,3,6,8,10,11,12,15,20],structur:[10,11,18],style:11,subpackag:8,substitut:3,success:19,summari:6,support:[8,10,11,13,14,15,17,18,19,20],suppress:6,suspens:20,syntax:18,system:[3,4,21],t:[3,8,10,11,14,16,20],tabl:[10,11],target:[3,20],target_accel_ignor:3,target_coordin:3,target_spe:3,tau:3,telescop:[2,3,12,14,20],term:3,termin:6,than:[3,6,20],thei:16,thi:[3,4,6,8,12,15,19,20,21],third:11,those:[10,11],threshold:3,threshold_allow_360deg:20,through:13,thu:20,tilt:11,time:[3,8,14,20],timestamp:3,toml:[10,11,12],tool:[0,21],torqu:14,track:3,translate_coordsi:8,tupl:[3,8,12,14,16,20],two:14,txt:[6,11],type:[1,3,6,8,10,11,12,14,16,17,18,19,20],u:[3,16,20],uncertainti:20,uniform:12,union:[1,3,6,8,10,11,12,14,15,20],unit:[3,8,12,14,15,17,20],unix:3,unwrap:[17,20],up:[3,19],updat:3,upper:[3,19],uppercas:10,us:[3,8,13,16,19,20,21],user:[5,6],util:14,val:8,valid:[10,11],valu:[3,6,8,10,11,14,17,18,19,20],valueerror:20,variabl:[3,8,11],vector:3,version:[17,19,20,21],violat:20,w:20,want:20,warn:6,when:[19,20],where:[3,11,20],which:[3,5,6,8,14,20],without:16,won:[3,8,10,11,20],x:[11,12,18,20],y:12,yet:14,yield:19,you:[3,20],your:16,z0:10,z:10,zero:11},titles:["neclib","neclib.configuration","neclib.controllers","neclib.controllers.antenna_pid","neclib.exceptions","neclib.interfaces","neclib.interfaces.console_logger","neclib.parameters","neclib.parameters.obsparam","neclib.parameters.parser","neclib.parameters.parser.obsparam_data","neclib.parameters.parser.pointing_error_data","neclib.parameters.pointing_error","neclib.simulators","neclib.simulators.antenna","neclib.typing","neclib.units","neclib.utils","neclib.utils.data_utils","neclib.utils.math_utils","neclib.utils.quantity_utils","neclib"],titleterms:{alias:[0,2,3,5,7,8,9,10,11,12,13,14,17,20],antenna:14,antenna_pid:3,configur:1,console_logg:6,control:[2,3],data_util:18,except:4,featur:21,instal:21,interfac:[5,6],math_util:19,neclib:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],obsparam:8,obsparam_data:10,paramet:[7,8,9,10,11,12],parser:[9,10,11],pointing_error:12,pointing_error_data:11,quantity_util:20,simul:[13,14],submodul:[0,2,5,7,9,13,17],subpackag:[0,7],type:15,unit:16,usag:21,util:[17,18,19,20]}})