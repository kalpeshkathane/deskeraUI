<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Lead extends CI_Controller {

	public function __construct($config = 'rest')
	{
		header('Access-Control-Allow-Origin: *');
		    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
			$method = $_SERVER['REQUEST_METHOD'];
			if($method == "OPTIONS") {
				die();
			}
		parent::__construct();
		
	}
	
	public function index()
	{
		$this->load->view('output');
	}
		
	public function savelead()
	{
		$resultOut['output'] = array();	
		$postdata = json_decode(file_get_contents('php://input'), true);
		$this->load->model('country_model');
		$dataArray = array(
		   'country' => $postdata['country'],
		   'domain' => $postdata['domainName'],
		   'alpha2code' => $postdata['alpha2Code'],
		   'alpha3code' => $postdata['alpha3Code'],
		   'phoneno' => $postdata['phoneNo'],
		   'currency' => $postdata['currency'] 
		);
		$result = $this->country_model->insertData($dataArray);
		if($result){
			$resultOut['output']['resCode'] = '0000';	
			$resultOut['output']['resCodeDesc'] = 'successfully added';	
		}else{
			$resultOut['output']['resCode'] = '9999';	
		}
		$this->load->view('output', $resultOut);
	}
	
	public function getlead()
	{
		$this->load->model('country_model');
		$result = $this->country_model->getData();
		$this->load->view('output', $result);
	}
	
}
