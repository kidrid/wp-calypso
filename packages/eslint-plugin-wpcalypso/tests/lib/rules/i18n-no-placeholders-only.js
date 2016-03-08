/**
 * @fileoverview Disallow strings which include only placeholders
 * @author Automattic
 * @copyright 2016 Automattic. All rights reserved.
 * See LICENSE.md file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require( '../../../lib/rules/i18n-no-placeholders-only' ),
	RuleTester = require( 'eslint' ).RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

( new RuleTester() ).run( 'i18n-no-placeholders-only', rule, {
	valid: [
		{
			code: 'translate( \'Hello %s\' );'
		},
		{
			code: 'translate( \'Hello %(toWhom)s\' );'
		},
		{
			code: 'translate( \'%s%%s\' );'
		},
		{
			code: 'translate( \'{{example}}Hello World{{/example}}\' );'
		}
	],

	invalid: [
		{
			code: 'translate( \'%s%d\' );',
			errors: [ {
				message: rule.ERROR_MESSAGE
			} ]
		},
		{
			code: 'translate( \'Hello World\', \'%s%d\' );',
			errors: [ {
				message: rule.ERROR_MESSAGE
			} ]
		},
		{
			code: 'translate( \'{{example}}%s{{/example}}\' );',
			errors: [ {
				message: rule.ERROR_MESSAGE
			} ]
		}
	]
} );