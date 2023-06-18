import React from 'react'
import FeatureBox from './FeatureBox'
import './style.css'
import featrueImage from './images/feature_1.png'
import featrueImage1 from './images/feature_2.png'
import featrueImage2 from './images/feature_3.png'


function Feature() {
  return (
    <div className='features'>
        <div className='a-container'>
     <FeatureBox image = { featrueImage} title = ' Get Notifications'  description = "Get notification about the workspace faster, user casn asily mannage the notifications" />
     <FeatureBox image = { featrueImage1} title = ' Manage Workspace' description = " Create workspace and  ,Add aemployees into the workspace, Assign task to Employees  " />
     <FeatureBox image = { featrueImage2} title = ' Add Personal tasks' description = "Add personal tasks and mannage the tasks. User can also change the status of personal tasks" />
        </div>
      
    </div>
  )
}

export default Feature
