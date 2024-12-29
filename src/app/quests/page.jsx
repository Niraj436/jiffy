import Container from '@/components/Container'
import CulturalQuest from '@/components/CulturalQuest'
import Burger from '@/components/icons/Burger'
import JiffyLogo from '@/components/JiffyLogo'

import React from 'react'

const Quest = () => {
  return (
    <div className="bg-background max-w-[430px] mx-auto">
        <Container>
        
            <JiffyLogo />

            <div>
            <Burger />

            </div>
          
          
            
          
       
            

            <CulturalQuest />

        </Container>
    </div>
    
  )
}

export default Quest
