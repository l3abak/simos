var Base = require('./Base.js').Base;

/*----------------------------------------------------------------------------*/
function Generator(model){
	this.constructor(model);
};
/*----------------------------------------------------------------------------*/
Generator.prototype = Object.create(Base.prototype);
/*----------------------------------------------------------------------------*/
Generator.prototype.constructor = function(model) {
	Base.prototype.constructor(model);
};
/*----------------------------------------------------------------------------*/
Generator.prototype.toString = function() {
	return "Generator (Fortran)";
};
/*----------------------------------------------------------------------------*/
Generator.prototype.generate = function(model) {
	if (model != undefined)
		this.setModel(model);
	
	var entity =  this;
	
	var cmd = [];
	
	
	cmd.push('! This an autogenerated file using simos.generator'); 
	cmd.push('! Please do not edit. ');
    cmd.push('! user defined code can be added at the marked locations.');
	cmd.push('! Babak Ommani, Oil and Gas Department, MARINTEK ');
	cmd.push('');
	cmd.push('! ' + entity.getDescription());
	cmd.push('! Generated with ' + entity.getType() + ' version ' + entity.getVersion());
	cmd.push('!');
	cmd.push('!------------------------------------------------------------------------------');
	cmd.push('!******************************************************************************');
	cmd.push('module ' + entity.getClassName() );
	cmd.push('    !---------------------------------------------------------------------------');
	cmd.push('    !use statements');
	cmd.push(entity.importModules(1));
	cmd.push('    !---------------------------------------------------------------------------');
    cmd.push(entity.getUserDefinedCode("use"));
	cmd.push('    !---------------------------------------------------------------------------');
	cmd.push('    implicit none');
    cmd.push('    private');
    //cmd.push('    type::varString_t
    //cmd.push('        character,dimension(:),allocatable::d
    //cmd.push('    end type varString_t');
	cmd.push('    !---------------------------------------------------------------------------');
	cmd.push('    public :: ' + entity.getTypeName());    
	cmd.push('    type   :: ' + entity.getTypeName());    
	cmd.push('        private');    
	cmd.push(entity.propertiesDeclaration(3));	
	cmd.push('    !---------------------------------------------------------------------------');
    cmd.push(entity.getUserDefinedCode("prop"));   
	cmd.push('    !---------------------------------------------------------------------------');
	cmd.push('    contains');    
	cmd.push('        private');    
	cmd.push(entity.propSetGetDeclarations(3));
	//cmd.push(entity.proceduresDeclaration(3));
	cmd.push('    !---------------------------------------------------------------------------');
    cmd.push(entity.getUserDefinedCode("funcSig"));
	cmd.push('    !---------------------------------------------------------------------------');
	cmd.push('    end type ' + entity.getTypeName());    
	cmd.push('    !---------------------------------------------------------------------------');
	cmd.push('contains');    
	cmd.push('    !---------------------------------------------------------------------------');
	//cmd.push(entity.initClass(1));
	cmd.push('    !---------------------------------------------------------------------------');
	cmd.push(entity.propSetGet(1));
	cmd.push('    !---------------------------------------------------------------------------');
	//cmd.push(entity.reprFunc(1));
	//cmd.push('    !---------------------------------------------------------------------------');
	//cmd.push(entity.typeReprFunc(1));
	//cmd.push('    !---------------------------------------------------------------------------');
	//cmd.push(entity.dictReprFunc(1));
	cmd.push('    !---------------------------------------------------------------------------');
	cmd.push(entity.getUserDefinedCode("func"));
	cmd.push('!---------------------------------------------------------------------------');
	cmd.push('end module  ' + entity.getClassName() );
	cmd.push('!******************************************************************************');
	
	return cmd.join('\n'); 
};

/*----------------------------------------------------------------------------*/
//module.exports = function(model) { return new PythonBase(model); };
exports.generator = new Generator();
