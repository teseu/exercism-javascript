// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { log } from "console";

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let counter = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    const element = birdsPerDay[i];
    counter = counter + element
  }
  return counter
  throw new Error('Please implement the totalBirdCount function');
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let j = (week * 7) - 7
  let counter = 0
  for (let i = 0; i < 7; i++) {
    const element = birdsPerDay[j];
    j++
    counter = counter + element
  }
  return counter
  throw new Error('Please implement the birdsInWeek function');
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let j = 2
  let counter = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    const element = birdsPerDay[i];
    if (j % 2 == 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1
    }
    birdsPerDay[i] = birdsPerDay[i]
    j++
  }
  return birdsPerDay
  throw new Error('Please implement the fixBirdCountLog function');
}
