#!/usr/bin/env node
import runGame from '../src/index.js'

const isEven = num => num % 2 === 0

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [number.toString(), correctAnswer]
}

const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
runGame(rules, generateRound)
