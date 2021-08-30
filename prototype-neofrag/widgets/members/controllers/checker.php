<?php
/**
 * https://neofr.ag
 * @author: Michaël BILCOT <michael.bilcot@neofr.ag>
 */

namespace NF\Widgets\Members\Controllers;

use NF\NeoFrag\Loadables\Controller;

class Checker extends Controller
{
	public function online_mini($settings = [])
	{
		return [
			'align' => !empty($settings['align']) && in_array($settings['align'], ['float-left', 'float-right']) ? $settings['align'] : 'float-right'
		];
	}
}
