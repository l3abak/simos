var PythonBase = require('./PythonBase.js').PythonBase;

/*----------------------------------------------------------------------------*/
function PythonGenerator(model){
	this.constructor(model);
};
/*----------------------------------------------------------------------------*/
PythonGenerator.prototype = Object.create(PythonBase.prototype);
/*----------------------------------------------------------------------------*/
PythonGenerator.prototype.constructor = function(model) {
	PythonBase.prototype.constructor(model);
};
/*----------------------------------------------------------------------------*/
PythonGenerator.prototype.toString = function() {
	return "PythonGenerator";
};
/*----------------------------------------------------------------------------*/
PythonGenerator.prototype.generate = function(pmodel) {
	if (pmodel != undefined){
		   if (pmodel.model != undefined) {
		       this.setModel(pmodel.model);
		   }
		}
	
	var entity =  this;
	
	var cmd = [];
	
	
	cmd.push('""" This an autogenerated file using simosjs.generator'); 
	cmd.push('    Please do not edit');
	cmd.push('    Babak Ommani, Offshore Hydrodynamic, MARINTEK """');
	cmd.push('');
	cmd.push('## ' + entity.getDescription());
	cmd.push('## Generated with ' + entity.getClassName() );
	cmd.push('');
	cmd.push('#------------------------------------------------------------------------------');
	cmd.push('#modules');
	cmd.push(entity.importModules());
	cmd.push('#------------------------------------------------------------------------------');
	cmd.push(entity.getUserDefinedCode("import"));
	cmd.push('#------------------------------------------------------------------------------');
	cmd.push('');
	cmd.push('#******************************************************************************');
	cmd.push('class ' + entity.getClassName() + '(' + entity.superTypesList() + '):');
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.classInit(1));
	cmd.push('#------------------------------------------------------------------------------');
	cmd.push(entity.getUserDefinedCode("method"));
	cmd.push('#------------------------------------------------------------------------------');
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push('    #creating set and gets');
	cmd.push(entity.propSetGet(1));
	cmd.push('');
	cmd.push(entity.storageSetGet(1));
	cmd.push('');
	cmd.push('    #creating array functions for updating sizes');
	cmd.push(entity.arraysUpdateSize(1));
	cmd.push('');
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.isStringFunc(1));	
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.reprFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.typeReprFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.dictReprFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.mongodbReprFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.jsonReprFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.cloneFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push('    #---------------------Entity access functions ------------------------------');
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.hasEntityFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.getEntityFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.lookForEntityFunc(1));		
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.getEntityWithFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.getAllEntitiesWithFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.hasEntityWithFunc(1));	
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.lookForEntityWithFunc(1));	
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.findEntityFunc(1));		
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push('    #---------------------check functions --------------------------------------');	
	cmd.push('    #---------------------------------------------------------------------------');	
	cmd.push(entity.isSetFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.isContainedFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.getPropModelFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.propInitValueFuncs(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.factoryFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.saveFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.loadFunc(1));
	cmd.push(entity.loadInitFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.loadDataItemFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.loadJSONFunc(1));
	cmd.push(entity.loadFromJSONDict(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.saveJSONFunc(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push('    #---------------------Load HDF5 functions ----------------------------------');	
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.loadHDF5Func(1));
	cmd.push(entity.loadFromStorage(1));
	cmd.push(entity.loadFromHDF5Handle(1));
	cmd.push(entity.loadDataItemFromHDF5(1));
	cmd.push(entity.loadDataFromHDF5Handle(1));
	cmd.push(entity.loadFromHDF5HandleItem(1));
	cmd.push(entity.loadFromHDF5HandleItemAtomicSingle(1));
	cmd.push(entity.loadFromHDF5HandleItemAtomicArray(1));
	cmd.push(entity.loadFromHDF5HandleItemNonAtomicSingle(1));
	cmd.push(entity.loadFromHDF5HandleItemNonAtomicArray(1));
	cmd.push(entity.loadFromHDF5HandleItemNonAtomicArrayUngroup(1));	
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push('    #---------------------Save HDF5 functions ----------------------------------');	
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.saveHDF5Func(1));
	cmd.push(entity.saveVertionsToHDF5Handle(1));
	cmd.push(entity.saveToHDF5Handle(1));
	cmd.push(entity.saveDataToHDF5Handle(1));
	cmd.push(entity.saveToHDF5HandleItem(1));
	cmd.push(entity.saveToHDF5HandleItemAtomicSingle(1));
	cmd.push(entity.saveToHDF5HandleItemAtomicArray(1));
	cmd.push(entity.saveToHDF5HandleItemNonAtomicSingle(1));
	cmd.push(entity.saveToHDF5HandleItemNonAtomicArray(1));
	cmd.push(entity.saveToHDF5HandleItemNonAtomicArrayUngroup(1));	
	cmd.push('');
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push('    #---------------------Save MongoDB functions -------------------------------');	
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.saveMDBFunc(1));
	cmd.push(entity.saveToMongo(1));
	cmd.push(entity.saveDataToMongo(1));
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push('    #---------------------Load MongoDB functions -------------------------------');	
	cmd.push('    #---------------------------------------------------------------------------');
	cmd.push(entity.loadMDBFunc(1));
	cmd.push(entity.loadFromMongo(1));
	cmd.push(entity.loadDataFromMongo(1));
	cmd.push(entity.loadDataItemFromMongo(1));
	cmd.push(entity.loadFromMongoItem(1));
	cmd.push(entity.loadFromMongoItemAtomicSingle(1));
	cmd.push(entity.loadFromMongoItemAtomicArray(1));
	cmd.push(entity.loadFromMongoItemNonAtomicSingle(1));
	cmd.push(entity.loadFromMongoItemNonAtomicArray(1));
	cmd.push('#---------------------------------------------------------------------------');
	cmd.push('#modules');
	cmd.push(entity.getImportForCustomDataTypes());
	cmd.push('');      
	cmd.push('#******************************************************************************');
	
	return cmd.join('\n'); 
};

/*----------------------------------------------------------------------------*/
//module.exports = function(model) { return new PythonBase(model); };
exports.generator = new PythonGenerator();