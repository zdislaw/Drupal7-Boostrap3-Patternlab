<?php

class BF_Object{
	protected $_created;
	protected $_modified;

	public function BF_Object($attributes = Array()){
		// Apply provided attribute values
		foreach($attributes as $field=>$value)
			$this->$field = $value;
	}

	function __set($name,$value){
		if(method_exists($this, $name))
			$this->$name($value);
	}

	function __get($name){
		if(method_exists($this, $name))
			return $this->$name();
	}

	protected function created($value = null){
		// If value was provided, set the value
		if($value){
			if(is_numeric($value)){
				$dtStr = date("c", $value);
				$this->_created = new DateTime($dtStr);
			}
			else if($value instanceof DateTime){
				$this->_created = $value;
			}
		}
		// If no value was provided return the existing value
		else{
			return $this->_created;
		}
	}

	protected function modified($value = null){
		// If value was provided, set the value
		if($value){
			if(is_numeric($value)){
				$dtStr = date("c", $value);
				$this->_modified = new DateTime($dtStr);
			}
			else if($value instanceof DateTime){
				$this->_modified = $value;
			}
		}
		// If no value was provided return the existing value
		else
			return $this->_modified;
	}
}