import { useEffect, useState } from 'react'
import { getData } from './GET/GetData'

export default function Rules() {
  function toRoman(num) {
    const romans = [
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
      'X',
      'XI',
      'XII',
      'XIII',
      'XIV',
      'XV'
    ]
    return romans[num - 1] || num
  }

  const [rules, setRules] = useState([])
  const rulesBySection = rules.reduce((acc, rule) => {
    // acc c'est le paramètre accumulation avec reduce
    // Si la section existe déja on fait un nvx tableau d'ou le ...acc
    // et on y ajoute la description
    // Sinon on créer un tableau avec la première description
    acc[rule.SECTION] = acc[rule.SECTION]
      ? [...acc[rule.SECTION], [rule.DESCRIPTION]]
      : [rule.DESCRIPTION]
    return acc
  }, {})

  useEffect(() => {
    async function fetchRules() {
      const response = await getData('http://localhost:3001/api/admin/rules')
      setRules(response.data)
    }
    fetchRules()
  }, [])

  return (
    <div
      className='reglement-1 
          flex 
          flex-col  
          mx-auto
          text-center
          text-black
          overflow-scroll
          p-4 
          [&_h1]:text-2xl 
          [&_h1]:font-extrabold 
          [&_h1]:uppercase 
          [&_div]:p-2.5 
          [&_div]:flex
          [&_div]:flex-col
          [&_div]:items-center'>
      <div>
        {Object.entries(rulesBySection).map(([section, description], index) => (
          <div key={section}>
            <h1>
              {toRoman(index + 1)}. {section}{' '}
            </h1>
            {description.map((desc, i) => (
              <p key={i}> • {desc}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
