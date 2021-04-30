<?php

include("PublisherApi.php");

$api = new \Aff1\PublisherApi();

$api->setProperty('api_key', 'P39U6sLGJ7IKColb');
$api->setProperty('target_hash', 'q1Z3Nlw9');
$api->setProperty('country_code', request('country_code'));
$api->setProperty('clickid', request('clickid'));
$api->setPrice(3900);
$api->setProperty('first_name', custom('first_name'));
$api->setProperty('last_name', custom('last_name'));
$api->setProperty('flow_hash', '');
$api->setProperty('address', request('address'));
$api->setProperty('state', custom('state'));
$api->setProperty('city', custom('city'));
$api->setProperty('zipcode', custom('zipcode'));
$api->setProperty('email', request('email'));
$api->setProperty('comment', request('comment'));
$api->setProperty('size', custom('size'));
$api->setProperty('quantity', custom('quantity'));
$api->setProperty('password', custom('password'));
$api->setProperty('language', custom('language'));
$api->setProperty('tz_name', custom('tz_name'));
$api->setProperty('call_time_frame', custom('call_time_frame'));
$api->setProperty('messenger_code', custom('messenger_code'));
$api->setProperty('sale_code', custom('sale_code'));
$api->setProperty('browser_locale', $api->getBrowserLocale());
$api->setProperty('phone2', request('phone2'));



$response = $api->makeOrder(request('client'), request('phone'));

if (true) {
    writeLog($api);
}

$response = json_decode($response, true);

if ($response['status'] !== 'success') {
    die(var_dump($response));
}

die(showSuccessPage());

/** Functions */
function showSuccessPage()
{
    $data_params = [];

    header(
        'Location: success.html?' .
        http_build_query(array_merge(
            $_GET,
            array('name' => request('client'), 'phone' => $_POST['phone'],
            $data_params
        )))
    );
}

function request($field)
{
    return isset($_REQUEST[$field]) ? $_REQUEST[$field] : '';
}

function custom($field)
{
    return isset($_REQUEST['custom'], $_REQUEST['custom'][$field]) ? $_REQUEST['custom'][$field] : '';
}

function writeLog($api)
{
    $params = array_merge(
        $api->getRequestParams(),
        array(
            'date' => date("Y-m-d H:i:s"),
            'success' => (int)in_array($api->getCurlInfo()['http_code'], array(200, 202, 422)),
        )
    );

    @file_put_contents("./response.txt", sprintf("%s\n", json_encode($params)), FILE_APPEND);
}