<?php
class Country_model extends CI_Model {

        public function insertData($data)
        {		
               $result = $this->db->insert('lead', $data);
			   return $result;
        }

        public function getData()
        {
			$results = array();
			$this->db->order_by('created_date', 'desc');
			$query=$this->db->get('lead');
			if ($query->num_rows() >= 1)
			{
				$results = $query->result();
			}	
			$data['output'] = array("resCodeDesc"=>$results,"resCode"=>"0000");
			return $data;
        }

}
?>