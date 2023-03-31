<?php

$start = microtime(true);
$ajax = new AjaxRun();
$result = $ajax->run();
$time = microtime(true) - $start;

var_dump([
    'result' => $result,
    'time' => $time,
]);

class AjaxRun
{

    private $user_info;
    private $dbDelay = 1;

    function __construct()
    {
        $this->user_info = $this->getUserInfo();
    }

    function run()
    {
        $result = [];
        switch ($_REQUEST['user_data']) {
            case 'name':
                $result = ['success' => [
                    'name' => $this->user_info['name']
                ]];
                break;
            case 'tariff':
                $result = ['success' => [
                    'tariff' => $this->user_info['tariff']
                ]];
                break;
            case 'organization_info':
                $result = ['success' => [
                    'balance' => $this->user_info['balance'],
                    'organization_name' => $this->user_info['organization_name'],
                ]];
                break;
            default:
                $result = ['error' => 'Unknown request'];
        }
        return $result;
    }

    private function getUserInfo()
    {
        $user_info = [];
        $user_info['name'] = $this->getUserNameFromDB();
        $user_info['tariff'] = $this->getUserTariffFromDB();
        $user_info['balance'] = $this->getUserBalanceFromDB();
        $user_info['organization_name'] = $this->getUserOrganizationNameFromDB();

        return $user_info;
    }

    private function getUserNameFromDB() {
        sleep($this->dbDelay);
        return 'James Bond';
    }

    private function getUserTariffFromDB() {
        sleep($this->dbDelay);
        return 'Unlimited for 100 years';
    }

    private function getUserBalanceFromDB() {
        sleep($this->dbDelay);
        return '$1';
    }

    private function getUserOrganizationNameFromDB() {
        sleep($this->dbDelay);
        return 'Secret information';
    }
}
