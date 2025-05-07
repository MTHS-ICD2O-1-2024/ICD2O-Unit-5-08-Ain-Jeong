// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculate, doing division
 */
// eslint-disable-next-line no-unused-vars
function doDivision () {
  let counter = 0

  // input
  let dividend = parseFloat(document.getElementById('dividend-number').value)
  const divisor = parseFloat(
    document.getElementById('divisor-number').value
  )

  // process
  while (dividend >= divisor) {
    dividend -= divisor;
    counter++;
  }

  // output
  document.getElementById('answer').innerHTML = 'Your answer is: ' + counter + ' and ' + dividend + '/' + divisor
}
