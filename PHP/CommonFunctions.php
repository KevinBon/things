
class CommonFunctions {
    **
    * Ex: CommonFunctions::arrayToHashMap($arrayOfObjets, function($row) {
            return $row->getId();
          });
    * Ex: CommonFunctions::arrayToHashMap($arrayOfObjets, 'id');
    * @param array $from
    * @param $idKey
    * @return array
    */
    static public function arrayToHashMap(array $from, $idKey)
    {
        if (count($from) === 0 || !isset($idKey)) {
            return array();
        }

        return array_reduce($from, function ($carry, $row) {
            $key = is_callable($carry['_idKey']) ?
                $carry['_idKey']($row) :
                get_object_vars($row)[$carry['_idKey']]
            ;
            $carry['result'][$key] = $row;

            return $carry;
        }, array(
            'result' => array(),
            '_idKey' => $idKey,
        ))['result'];
    }
}
