import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async(meetupData) => {
    const response = await fetch('api/new-meetup',{
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    router.push('/')
    // console.log(data);
  };

  return <>
  <Head>
    <title>Create a new meetup</title>
    <meta
      name='description'
      content='Create a new meetup for opportunities.'
    />
  </Head>
  <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </> 
};

export default NewMeetupPage;