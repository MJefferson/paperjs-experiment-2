/*
 * Paper.js - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2013, Juerg Lehni & Jonathan Puckey
 * http://lehni.org/ & http://jonathanpuckey.com/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

// Define default options for browser based compile-time preprocessing.
// These are also used for building, but some values are overridden
// (e.g. version, stats). 

var options = {
	parser: 'acorn',
	version: 'dev',
	browser: true,
	stats: true,
	svg: true,
	fatline: true,
	paperscript: true,
	debug: false
};
