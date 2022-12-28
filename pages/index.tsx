//import {GetServerSidePropsContext, GetStaticPropsContext} from 'next'
import ServiceCard from '../components/ServiceCard'
import {services} from '../data'

const index = () => {
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>As a .NET developer with some years of experience in the 
        industry, I am skilled in building and maintaining applications 
        using .NET frameworks and technologies. 
        I am a problem-solver at heart and enjoy the challenge of 
        tackling complex coding puzzles. In my free time, 
        I enjoy spending time with my dog and watching movies.
        I am always looking for opportunities to learn and grow as a 
        developer and am excited to take on new challenges
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-400' style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wider '>What I offer</h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {
            services.map(service=>(
            <div className='bg-gray-100 rounded-lg dark:bg-dark-200 lg:col-span-1'>
            <ServiceCard service={service} />
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default index
/*
export const getServerSideProps=async (context:GetServerSidePropsContext)=>{
  const res=await fetch ('http://localhost:3000/api/services')
  const data=await res.json()

  return {
    props:{
      services:data.services,
    }
  }
}

export const getStaticProps=async (context:GetStaticPropsContext)=>{
  const res=await fetch ('http://localhost:3000/api/services')
  const data=await res.json()

  return {
    props:{
      services:data.services,
    }
  }
}*/