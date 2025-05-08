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
  let firstNumber = parseFloat(
    document.getElementById('first-number').value
  )
  const secondNumber = parseFloat(
    document.getElementById('second-number').value
  )

  // process
  while (firstNumber >= counter) {
    firstNumber -= secondNumber
    counter++

    if (firstNumber < secondNumber) {
      break
    }
  }

  // output
  document.getElementById('answer').innerHTML =
    'Your answer is: ' +
    counter +
    ' R ' +
    firstNumber
}
