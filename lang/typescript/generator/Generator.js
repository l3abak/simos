var Base = require('./Base.js').Base;

/*----------------------------------------------------------------------------*/
function TSGenerator(model){
	this.constructor(model);
};
/*----------------------------------------------------------------------------*/
TSGenerator.prototype = Object.create(Base.prototype);
/*----------------------------------------------------------------------------*/
TSGenerator.prototype.constructor = function(model) {
	Base.prototype.constructor(model);
};
/*----------------------------------------------------------------------------*/
TSGenerator.prototype.toString = function() {
	return "TSGenerator";
};
/*----------------------------------------------------------------------------*/
TSGenerator.prototype.generate = function(pmodel) {
	if (pmodel != undefined){
		   if (pmodel.model != undefined) {
		       this.setModel(pmodel.model);
		   }
		}
	
	var entity =  this;
	
	var cmd = [];
	
	
	cmd.push('// This an autogenerated file using simos.generator'); 
	cmd.push('//    Please do not edit');
	cmd.push('//    Babak Ommani, GOTE TFC MART, Equinor ');
	cmd.push('');
	cmd.push('// ' + entity.getDescription());
	cmd.push('// Generated with ' + entity.getClassName() );
	cmd.push('');
	cmd.push('//------------------------------------------------------------------------------');
	//cmd.push('//modules');
	//cmd.push(entity.importModules());
	cmd.push('//Custom data types');
	cmd.push(entity.getImportForCustomDataTypes());
	cmd.push('//------------------------------------------------------------------------------');
	//cmd.push(entity.getUserDefinedCode("import"));
	//cmd.push('#------------------------------------------------------------------------------');
	//cmd.push('');
	cmd.push('//******************************************************************************');
	cmd.push('class ' + entity.getClassName() + '{');
	cmd.push('    //---------------------------------------------------------------------------');
	cmd.push(entity.classPropTypes(1));
	cmd.push('    //---------------------------------------------------------------------------');
	cmd.push(entity.classConstructor(1));	
	cmd.push('    //---------------------------------------------------------------------------');
	cmd.push(entity.propInitValueFuncs(1));		
	cmd.push('//------------------------------------------------------------------------------');
	cmd.push(entity.getUserDefinedCode("method"));
	cmd.push('//------------------------------------------------------------------------------');
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push('    #creating set and gets');
	// cmd.push(entity.propSetGet(1));
	// cmd.push('');
	// cmd.push(entity.storageSetGet(1));
	// cmd.push('');
	// cmd.push('    #creating array functions for updating sizes');
	// cmd.push(entity.arraysUpdateSize(1));
	// cmd.push('');
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.sweepFunc(1));	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.isStringFunc(1));	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.isStringArrayFunc(1));	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.getShapeFunc(1));		
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.reprFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.typeReprFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.dictReprFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.dictDMTReprFunc(1));	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.mongodbReprFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.jsonReprFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.dmtReprFunc(1));	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.cloneFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push('    #---------------------Entity access functions ------------------------------');
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.hasEntityFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.getEntityFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.lookForEntityFunc(1));		
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.getEntityWithFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.getAllEntitiesWithFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.hasEntityWithFunc(1));	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.lookForEntityWithFunc(1));	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.findEntityFunc(1));		
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push('    #---------------------check functions --------------------------------------');	
	// cmd.push('    #---------------------------------------------------------------------------');	
	// cmd.push(entity.isSetFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.isContainedFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.getPropModelFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.propInitValueFuncs(1));
	 cmd.push('    //---------------------------------------------------------------------------');
	 cmd.push(entity.factoryFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.saveFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.loadFunc(1));
	// cmd.push(entity.loadInitFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.loadDataItemFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.loadJSONFunc(1));
	// cmd.push(entity.loadFromJSONDict(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.saveJSONFunc(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.saveDMTFunc(1));	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push('    #---------------------Load HDF5 functions ----------------------------------');	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.loadHDF5Func(1));
	// cmd.push(entity.loadFromStorage(1));
	// cmd.push(entity.loadFromHDF5Handle(1));
	// cmd.push(entity.loadDataItemFromHDF5(1));
	// cmd.push(entity.loadDataFromHDF5Handle(1));
	// //cmd.push(entity.loadFromHDF5HandleItem(1));
	// //cmd.push(entity.loadFromHDF5HandleItemAtomicSingle(1));
	// //cmd.push(entity.loadFromHDF5HandleItemAtomicArray(1));
	// //cmd.push(entity.loadFromHDF5HandleItemNonAtomicSingle(1));
	// //cmd.push(entity.loadFromHDF5HandleItemNonAtomicArray(1));
	// //cmd.push(entity.loadFromHDF5HandleItemNonAtomicArrayUngroup(1));	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push('    #---------------------Save HDF5 functions ----------------------------------');	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.saveHDF5Func(1));
	// cmd.push(entity.saveVertionsToHDF5Handle(1));
	// cmd.push(entity.saveToHDF5Handle(1));
	// cmd.push(entity.saveDataToHDF5Handle(1));
	// //cmd.push(entity.saveToHDF5HandleItem(1));
	// //cmd.push(entity.saveToHDF5HandleItemAtomicSingle(1));
	// //cmd.push(entity.saveToHDF5HandleItemAtomicArray(1));
	// //cmd.push(entity.saveToHDF5HandleItemNonAtomicSingle(1));
	// //cmd.push(entity.saveToHDF5HandleItemNonAtomicArray(1));
	// //cmd.push(entity.saveToHDF5HandleItemNonAtomicArrayUngroup(1));	
	// cmd.push('');
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push('    #---------------------Save MongoDB functions -------------------------------');	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.saveMDBFunc(1));
	// cmd.push(entity.saveToMongo(1));
	// cmd.push(entity.saveDataToMongo(1));
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push('    #---------------------Load MongoDB functions -------------------------------');	
	// cmd.push('    #---------------------------------------------------------------------------');
	// cmd.push(entity.loadMDBFunc(1));
	// cmd.push(entity.loadFromMongo(1));
	// cmd.push(entity.loadDataFromMongo(1));
	// cmd.push(entity.loadDataItemFromMongo(1));
	// cmd.push(entity.loadFromMongoItem(1));
	// cmd.push(entity.loadFromMongoItemAtomicSingle(1));
	// cmd.push(entity.loadFromMongoItemAtomicArray(1));
	// cmd.push(entity.loadFromMongoItemNonAtomicSingle(1));
	// cmd.push(entity.loadFromMongoItemNonAtomicArray(1));
	cmd.push('//---------------------------------------------------------------------------');
	cmd.push('}');      

	cmd.push('export {' + entity.getClassName() + ' as ' + this.getTypeID(this.getType()) + '}');
	return cmd.join('\n'); 
};

/*----------------------------------------------------------------------------*/
//module.exports = function(model) { return new Base(model); };
exports.generator = new TSGenerator();