import { forwardRef } from 'react'

const ToggleWeatherIcon = forwardRef(({className, darkMode,...props}, ref) => {

  if(darkMode) return (
    <svg id="rain_icon"
      className={className + ' dark-mode'} 
      ref={ref} 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.01 384">
      <path d="M0,176.65V0H384V176.65c-.44-.5-.52-1.11-.55-1.74-.33-7.11-1.6-14.09-3.04-21.04-7.61-36.73-24.72-68.47-50.76-95.4-12.74-13.17-27.21-24.16-43.18-33.21C261.09,10.88,233.8,2.71,204.74,.81c-12.32-.81-24.68-.49-37,1.12-19.46,2.54-38.13,7.74-55.9,15.97-33.2,15.39-60.01,38.35-80.27,68.76C15.06,111.44,4.93,138.66,1.16,168.22c-.36,2.8,0,5.73-1.16,8.43Z" style={{ fill: 'none' }}/>
      <path d="M207.75,384c2.7-1.16,5.64-.81,8.44-1.17,30.16-3.81,57.8-14.3,82.98-31.19,24.77-16.62,44.61-37.91,59.53-63.73,11.91-20.62,19.81-42.65,23.32-66.23,.67-4.53,1.32-9.06,1.99-13.59v175.91H207.75Z" style={{ fill: 'none' }}/>
      <path d="M0,208.09c1.16,2.7,.81,5.63,1.16,8.43,3.79,29.84,13.99,57.34,30.87,82.17,28.43,41.81,67.39,68.77,116.63,80.71,8.48,2.06,17.09,3.57,25.84,4.04,.63,.03,1.25,.1,1.74,.55H0V208.09Z" style={{ fill: 'none' }}/>
      <path d="M221.46,117.82c-.59-.12-.73-.12-.83-.18-.87-.48-1.74-.97-2.61-1.46-16.41-9.21-34.03-12.4-52.45-9.04-23.06,4.19-40.96,16.49-53.42,36.43-.96,1.53-1.96,2.68-3.78,3.32-9.73,3.45-18.05,9.03-24.8,16.86-12.81,14.87-17.47,32.11-13.61,51.21,5.7,28.22,30.22,47.83,59.05,47.85,45.25,.03,90.5,0,135.75,.02,4.27,0,8.47-.5,12.61-1.46,33.07-7.71,48.54-46.37,29.94-74.72-2.81-4.28-6.21-8.06-9.99-11.27,.16-1.26,1-1.69,1.64-2.23,5.67-4.72,9.88-10.53,12.97-17.18,1.37-2.95,2.43-6.03,3.09-9.2,.88-4.19-1.27-7.45-5.15-8.15-2.31-.42-4.06,.87-5.84,2.04-5.67,3.74-11.73,5.27-18.51,3.66-9.25-2.19-17.91-10.62-17.44-22.77,.36-9.17,5.03-16.03,13.55-19.94,2.97-1.36,5.03-3.31,4.94-6.77-.07-2.91-2.26-5.03-6.18-6.07-6.32-1.67-12.64-2.43-19.24-1.5-10.91,1.53-20.25,5.96-28.2,13.5-5.06,4.8-8.74,10.53-11.5,17.04h0Zm-38.35,166.25c0-2.24,.08-4.47-.02-6.71-.17-3.82-2.41-6.29-5.81-6.56-3.55-.28-6.63,2.02-6.87,5.86-.32,5.07-.29,10.19,.04,15.25,.24,3.61,3.36,6.15,6.45,6,3.32-.15,6-3.02,6.19-6.77,.11-2.35,.02-4.72,.02-7.08h0Zm17.79-.13h0v6.71c0,.25,0,.5,.02,.74,.31,3.54,2.86,6.29,6.05,6.53,3.09,.23,6.2-2.25,6.58-5.86,.54-5.18,.53-10.43,.02-15.62-.36-3.68-3.27-5.83-6.7-5.63-3.44,.2-5.75,2.64-5.94,6.42-.11,2.23-.02,4.47-.02,6.71h0Zm-79.16,.15h.01c0-2.24,.05-4.48-.01-6.72-.12-4.06-2.48-6.56-6.08-6.56s-6.21,2.46-6.31,6.4c-.12,4.73-.11,9.46,0,14.19,.08,3.75,2.97,6.6,6.34,6.51,3.41-.09,5.87-2.61,6.03-6.35,.11-2.49,.02-4.98,.02-7.47Zm30.68,.23h0c0-2.49,.12-4.99-.03-7.47-.21-3.67-2.77-6.04-6.3-6.04s-5.97,2.39-6.05,6.18c-.11,4.85-.12,9.71,0,14.57,.09,3.75,2.59,6.26,6.01,6.36,3.36,.1,6.21-2.75,6.36-6.5,.1-2.36,.02-4.73,.02-7.1h0Zm91.57-.23h0c0-2.24,.06-4.48,0-6.72-.12-4.06-2.48-6.56-6.08-6.55-3.67,0-6.21,2.46-6.31,6.41-.12,4.73-.11,9.46,0,14.19,.08,3.75,2.99,6.6,6.35,6.5,3.42-.1,5.86-2.61,6.02-6.36,.11-2.49,.02-4.98,.02-7.47h0Zm18.27,.05h0c0,2.61-.12,5.24,.03,7.84,.2,3.47,2.77,5.88,6.04,5.93,3.09,.05,6.13-2.54,6.25-5.81,.18-5.22,.2-10.46-.02-15.68-.14-3.41-2.92-5.64-6.29-5.61-3.35,.02-5.81,2.34-5.99,5.86-.13,2.48-.02,4.98-.02,7.47h0Z" style={{ fill: 'none' }}/>
      <path d="M221.45,117.83c2.76-6.5,6.44-12.24,11.5-17.04,7.94-7.54,17.29-11.97,28.2-13.5,6.6-.93,12.93-.17,19.24,1.5,3.91,1.03,6.1,3.15,6.18,6.07,.09,3.46-1.97,5.41-4.94,6.77-8.52,3.91-13.2,10.77-13.55,19.94-.47,12.14,8.19,20.57,17.44,22.77,6.79,1.61,12.84,.08,18.51-3.66,1.78-1.17,3.53-2.46,5.84-2.04,3.88,.7,6.03,3.96,5.15,8.15-.66,3.17-1.72,6.25-3.09,9.2-3.1,6.64-7.3,12.46-12.97,17.18-.65,.54-1.48,.97-1.64,2.23,3.78,3.22,7.18,6.99,9.99,11.27,18.61,28.35,3.13,67.01-29.94,74.72-4.14,.96-8.34,1.47-12.61,1.46-45.25-.02-90.5,.01-135.75-.02-28.83-.02-53.35-19.64-59.05-47.85-3.86-19.1,.8-36.34,13.61-51.21,6.75-7.83,15.08-13.41,24.8-16.86,1.83-.65,2.83-1.79,3.78-3.32,12.46-19.94,30.35-32.24,53.42-36.43,18.42-3.35,36.04-.16,52.45,9.04,.87,.49,1.74,.98,2.61,1.46,.1,.06,.23,.05,.83,.18h0Zm-93.62,25.68c5.27-.15,10.06,.3,14.75,1.55,21.45,5.72,35.67,19.19,42.9,40.07,1.32,3.82-.36,7.15-3.94,8.43-3.1,1.11-6.26-.47-7.82-3.97-.5-1.14-.86-2.34-1.3-3.5-9.21-24.05-36.17-35.96-60.31-27.17-17.58,6.4-33.05,25.22-30.34,49.32,1.56,13.83,8.14,24.71,19.19,32.91,8.38,6.23,17.95,8.86,28.43,8.84,40.86-.1,81.72-.04,122.58-.04,5.5,0,11.01,.17,16.49-.1,9.82-.49,18.09-4.6,24.63-11.84,7.42-8.21,10.33-17.94,9.13-28.98-2.48-22.88-25.79-36.45-44.43-31-.62,1.19-.2,2.41-.02,3.62,.36,2.5,.28,4.98-.38,7.42-.68,2.52-2.36,4.02-4.91,4.59-2.35,.52-4.11-.5-5.7-2.05-1.46-1.43-1.77-3.21-1.7-5.16,.18-5-.38-9.93-1.33-14.84-5.83-30.17-32.19-53.25-65.66-53.05-13.15,.08-25.34,4.07-36.2,11.58-5.21,3.6-10.14,7.61-14.06,13.38h0Zm168.6,13.75c-16.15,1.36-28.46-4-36.24-17.42-7.87-13.58-6.01-26.96,2.75-39.69-14.15,.27-28.78,13.7-30.6,26.48,11.39,10.53,18.97,23.49,23.1,38.57,9.49-1.53,18.61-1.34,27.46,2.05,1.11,.43,2.19,.38,3.22-.3,3.76-2.45,7.22-5.21,10.3-9.68h.01Z"/>
      <path d="M183.1,284.07c0,2.36,.09,4.72-.02,7.08-.18,3.75-2.87,6.62-6.19,6.77-3.1,.14-6.22-2.39-6.45-6-.33-5.07-.35-10.19-.04-15.25,.24-3.84,3.32-6.13,6.87-5.86,3.4,.27,5.64,2.74,5.81,6.56,.1,2.23,.02,4.47,.02,6.71h0Z"/>
      <path d="M200.9,283.93c0-2.24-.09-4.48,.02-6.71,.19-3.79,2.51-6.22,5.94-6.42,3.43-.2,6.34,1.95,6.7,5.63,.5,5.18,.52,10.43-.02,15.62-.38,3.61-3.49,6.09-6.58,5.86-3.19-.24-5.74-2.99-6.05-6.53-.02-.25-.02-.5-.02-.74v-6.71h.01Z"/>
      <path d="M121.74,284.08c0,2.49,.09,4.98-.02,7.47-.16,3.75-2.61,6.26-6.03,6.35-3.37,.09-6.26-2.75-6.34-6.51-.11-4.73-.11-9.47,0-14.19,.1-3.94,2.64-6.4,6.31-6.4s5.95,2.5,6.08,6.56c.07,2.24,.01,4.48,.01,6.72h-.01Z"/>
      <path d="M152.42,284.31c0,2.37,.08,4.73-.02,7.1-.15,3.74-3,6.59-6.36,6.5-3.42-.1-5.92-2.61-6.01-6.36-.12-4.85-.11-9.71,0-14.57,.09-3.78,2.56-6.18,6.05-6.18s6.08,2.37,6.3,6.04c.14,2.48,.03,4.98,.03,7.47h0Z"/>
      <path d="M244,284.07c0,2.49,.09,4.98-.02,7.47-.16,3.75-2.61,6.26-6.02,6.36-3.36,.1-6.26-2.75-6.35-6.5-.11-4.73-.11-9.47,0-14.19,.1-3.95,2.64-6.41,6.31-6.41s5.96,2.5,6.08,6.55c.07,2.24,0,4.48,0,6.72h0Z"/>
      <path d="M262.27,284.12c0-2.49-.1-4.99,.02-7.47,.18-3.52,2.64-5.84,5.99-5.86,3.38-.02,6.15,2.21,6.29,5.61,.22,5.22,.2,10.46,.02,15.68-.11,3.26-3.16,5.86-6.25,5.81-3.28-.06-5.84-2.47-6.04-5.93-.15-2.61-.03-5.23-.03-7.84h0Z"/>
      <path d="M127.83,143.52c3.92-5.77,8.85-9.78,14.06-13.38,10.86-7.5,23.05-11.5,36.2-11.58,33.48-.2,59.84,22.88,65.66,53.05,.95,4.91,1.51,9.84,1.33,14.84-.07,1.94,.24,3.73,1.7,5.16,1.59,1.55,3.35,2.57,5.7,2.05,2.55-.57,4.23-2.06,4.91-4.59,.66-2.44,.74-4.92,.38-7.42-.17-1.21-.59-2.43,.02-3.62,18.65-5.45,41.95,8.12,44.43,31,1.2,11.04-1.71,20.77-9.13,28.98-6.54,7.24-14.81,11.35-24.63,11.84-5.49,.27-10.99,.1-16.49,.1-40.86,0-81.72-.06-122.58,.04-10.48,.02-20.05-2.61-28.43-8.84-11.04-8.2-17.63-19.08-19.19-32.91-2.72-24.1,12.75-42.93,30.34-49.32,24.14-8.78,51.11,3.12,60.31,27.17,.45,1.16,.8,2.36,1.3,3.5,1.56,3.5,4.71,5.08,7.82,3.97,3.58-1.28,5.26-4.61,3.94-8.43-7.23-20.87-21.45-34.34-42.9-40.07-4.69-1.25-9.48-1.71-14.75-1.55h0Z" style={{ fill: 'none' }}/>
      <path d="M296.44,157.27c-3.09,4.48-6.55,7.23-10.3,9.68-1.03,.67-2.11,.72-3.22,.3-8.86-3.4-17.97-3.58-27.46-2.05-4.13-15.08-11.71-28.04-23.1-38.57,1.82-12.78,16.45-26.21,30.6-26.48-8.76,12.73-10.62,26.11-2.75,39.69,7.78,13.42,20.09,18.78,36.24,17.42h-.01Z" style={{ fill: 'none' }}/>
      <path d="M380.62,217.19c-2,14.8-5.4,27.2-8.8,36.9-5,14.4-11.7,28.2-20.2,41.3-8.7,13.6-19,25.9-31,36.7-12.3,11.2-25.7,20.8-40.5,28.5-8.8,4.6-17.8,8.4-27.1,11.6-11.7,4-21.7,6.1-28.1,7.3-14.1,2.5-37.2,5-64.3,.4-4.2-.7-12-2.2-21.6-4.9-14.2-4.1-25.3-9.1-32.3-12.6-10.4-5.2-20.3-11.3-29.7-18.4-20.6-15.5-37.3-34.5-50.2-56.8C8.62,255.59,4.32,227.09,3.32,219.69c-1.6-11.5-1.7-21.2-1.5-28.1-.1-16.7,2-30.7,4.3-41.2,1.4-6.2,4.4-18.6,10.9-33.6,2.8-6.6,7.7-16.8,15.2-28.3,5.7-8.8,12.2-17.2,19.5-25.1,13.2-14.4,28.3-26.4,45.3-36.1,13.9-8,28.4-14.1,43.6-18.4,5-1.4,14.3-3.8,26.2-5.4,8.8-1.2,16.5-1.6,23-1.8,12.3-.1,22.5,1,30.1,2.1,8.3,1.3,33.4,5.6,60.7,20,14.6,7.7,28,17.2,40.2,28.3,14.2,13.2,26.2,28.3,36,45.3,7.4,12.8,13.2,26.1,17.4,40,2.4,7.9,4.9,17.9,6.4,29.7,2.7,20.6,1.6,38,0,50.1ZM14.02,192.79c.7,48.6,18.1,90.9,53,125.5,34.4,34.1,76.4,51.5,124.8,51.5s90.1-17.3,124.6-51.2c35.1-34.6,53.1-77.2,53.2-126.3,0-49-17.8-91.5-52.7-126.1C282.22,31.89,240.12,14.39,191.62,14.49c-48.6,.1-90.8,17.6-125.3,52.1C31.82,101.19,14.62,143.39,14.02,192.79h0Z"/>
      </svg>
    )
  else return (
      <svg id="sun_icon"
        className={className} 
        ref={ref}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.51 380.77">
        <path d="M378.88,215.51c-2,14.8-5.4,27.2-8.8,36.9-5,14.4-11.7,28.2-20.2,41.3-8.7,13.6-19,25.9-31,36.7-12.3,11.2-25.7,20.8-40.5,28.5-8.8,4.6-17.8,8.4-27.1,11.6-11.7,4-21.7,6.1-28.1,7.3-14.1,2.5-37.2,5-64.3,.4-4.2-.7-12-2.2-21.6-4.9-14.2-4.1-25.3-9.1-32.3-12.6-10.4-5.2-20.3-11.3-29.7-18.4-20.6-15.5-37.3-34.5-50.2-56.8C6.88,253.91,2.58,225.41,1.58,218.01-.02,206.51-.12,196.81,.08,189.91c-.1-16.7,2-30.7,4.3-41.2,1.4-6.2,4.4-18.6,10.9-33.6,2.8-6.6,7.7-16.8,15.2-28.3,5.7-8.8,12.2-17.2,19.5-25.1,13.2-14.4,28.3-26.4,45.3-36.1,13.9-8,28.4-14.1,43.6-18.4,5-1.4,14.3-3.8,26.2-5.4C173.88,.61,181.58,.21,188.08,0c12.3-.1,22.5,1,30.1,2.1,8.3,1.3,33.4,5.6,60.7,20,14.6,7.7,28,17.2,40.2,28.3,14.2,13.2,26.2,28.3,36,45.3,7.4,12.8,13.2,26.1,17.4,40,2.4,7.9,4.9,17.9,6.4,29.7,2.7,20.6,1.6,38,0,50.1ZM12.28,191.11c.7,48.6,18.1,90.9,53,125.5,34.4,34.1,76.4,51.5,124.8,51.5s90.1-17.3,124.6-51.2c35.1-34.6,53.1-77.2,53.2-126.3,0-49-17.8-91.5-52.7-126.1C280.48,30.21,238.38,12.71,189.88,12.81c-48.6,.1-90.8,17.6-125.3,52.1C30.08,99.51,12.88,141.71,12.28,191.11h0Z"/>
        <path d="M190.18,261.71c-39.3,.1-71.2-31.8-71.5-70.7-.3-39.9,31.9-71.6,70.6-71.9,40.2-.3,72,32.1,72,71.2,.1,39-31.3,71.3-71.1,71.4h0Zm0-12.7c31.8,.5,58.8-26.7,58.6-58.8-.2-31.7-26.7-58.4-58.7-58.4s-58.6,27.1-58.6,58.5c-.1,32.4,26.9,59.1,58.7,58.7Z"/>
        <path d="M290.18,126.51c3.4,.1,5.2,1.3,6,4.2,.8,2.7-.1,5.7-2.5,7.1-6.3,3.7-12.5,7.4-18.9,10.9-3.8,2.1-7.3,1.2-9.1-1.9-1.6-2.6-1.1-5.6,1-7.8,1.2-1.2,2.6-1.8,4-2.6,5.1-3,10.2-6,15.3-9,1.6-.6,3-1,4.2-.9h0Z"/>
        <path d="M253.98,290.51c0,3.2-1.2,5.1-3.9,5.9-3,.9-6,.1-7.5-2.5-3.7-6.1-7.3-12.3-10.7-18.6-2.9-5.3-.1-10.3,5.4-10.2,2.6,.1,4.1,1.6,5.3,3.5,3.6,6,7.1,12.1,10.6,18.2,.6,1.3,.9,2.5,.8,3.7h0Z"/>
        <path d="M149.38,271.51c.1,1.6-.6,3.2-1.5,4.7-3.3,5.6-6.6,11.3-9.9,16.9-2.1,3.5-5.6,4.7-8.7,3-3.2-1.8-4.2-5.7-2.2-9.3,.7-1.3,1.5-2.6,2.2-3.8,2.7-4.7,5.4-9.4,8.2-14,2.7-4.4,7.4-5.1,10.5-1.6,1.1,1.2,1.4,1.9,1.4,4.1h0Z"/>
        <path d="M271.28,231.11c1.4-.1,2.8,.4,4.1,1.2,6.1,3.5,12.1,7.1,18.2,10.6,1.6,.9,2.5,2.3,2.7,4.1,.3,2.4,.2,4.8-2.1,6.3-2.2,1.5-4.8,1.7-7.1,.4-6.6-3.6-13.1-7.4-19.5-11.3-2.7-1.7-3.4-4.3-2.4-7.1,.9-2.7,3-4.2,6.1-4.2Z"/>
        <path d="M126.08,90.71c0-3.1,1.6-5.5,4-6.3,2.8-.9,6,.1,7.5,2.5,3.6,6.1,7.2,12.3,10.8,18.5,.6,1,.9,2,1,3.1,.3,3-1.1,5.6-3.6,6.6-2.5,1.1-5.5,.4-7.3-1.9-1.4-1.7-2.4-3.7-3.6-5.6-2.5-4.2-4.9-8.5-7.4-12.8-.8-1.3-1.5-2.7-1.4-4.1h0Z"/>
        <path d="M109.28,231.11c2.7-.1,4.4,1.3,5.4,3.6,1.1,2.4,.6,4.9-1.2,6.8-1.7,1.7-3.9,2.6-5.9,3.8-4.3,2.6-8.8,5.1-13.1,7.6-1.3,.8-2.6,1.3-4.2,1.4-3,.1-5.6-1.6-6.3-4.2-.9-3,.1-5.9,2.7-7.4,5.9-3.5,11.9-7,17.9-10.4,.4-.2,.9-.4,1.3-.7,1.1-.4,2.2-.5,3.4-.5h0Z"/>
        <path d="M83.78,132.51c0-4.8,4.6-7.5,9.3-5.4,1.5,.7,2.8,1.6,4.2,2.4,4.8,2.8,9.7,5.5,14.4,8.4,3.9,2.4,4.7,6.5,2.1,9.8-1.9,2.4-5,2.9-8.4,1.2-3.6-1.9-7.1-4-10.6-6.1-2.6-1.5-5.1-3.1-7.7-4.5-2.4-1.3-3.4-3.2-3.3-5.8h0Z"/>
        <path d="M248.08,84.21c4.8,.1,7.4,4.7,5.3,9.4-.7,1.4-1.6,2.8-2.4,4.2-2.7,4.7-5.4,9.4-8.2,14.1-1.2,1.9-2.6,3.6-5.1,3.8-5.3,.4-8.5-4.5-6-9.6,1.8-3.7,4-7.1,6-10.6,1.5-2.7,3.2-5.3,4.7-8,1.2-2.5,3.2-3.3,5.7-3.3h0Z"/>
        <path d="M196.18,295.01c0,3.7,.1,7.4,0,11.1-.1,3.8-2.4,6.1-5.9,6.1-3.8,.1-6.2-2.2-6.2-6.2-.1-7.3-.1-14.5,0-21.8,0-4,2.4-6.3,6.1-6.3s6,2.3,6,6.4c0,3.5,0,7.1,0,10.7h0Z"/>
        <path d="M294.48,196.51c-3.6,0-7.2,.1-10.7,0-4-.1-6.3-2.5-6.2-6.2,.1-3.5,2.4-5.9,6.2-5.9,7.4-.1,14.8-.1,22.2,0,3.8,0,6,2.4,6,6s-2.2,6-6,6.1c-3.9,.1-7.7,0-11.5,0h0Z"/>
        <path d="M85.58,184.31c3.6,0,7.2-.1,10.7,0,4,.1,6.2,2.4,6.3,6.1,.1,3-3,6.2-6.5,6.1-7.1-.3-14.3,0-21.5-.1-4.1,0-6.3-2.3-6.5-6-.2-3.2,2.9-6.6,6.7-6.3,3.6,.5,7.2,.3,10.8,.2h0Z"/>
        <path d="M183.98,85.71c0-3.6-.1-7.2,0-10.7,.1-4,2.4-6.4,6.1-6.4s6,2.3,6,6.4c.1,7.3,.1,14.5,0,21.8,0,3.8-2.3,6.1-5.9,6.2-3.8,.1-6.1-2.2-6.2-6.2-.1-3.7,0-7.4,0-11.1h0Z"/>
      </svg>
  )
})

export default ToggleWeatherIcon