import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const HomePage = (props) => {
  return <>
  <Head>
    <title>React Meetups</title>
    <meta
      name='description'
      content='Browse meetups'
    />
  </Head>
  <MeetupList meetups={props.meetups}/>   
  </>
};

// // getServerSideProps for needeing req and res
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch API
//   return {
//     props: {meetups: DUMMY}
//   }
// };

export async function getStaticProps() {
  
  const client = await MongoClient.connect('mongodb+srv://kiko:foiegras25@cluster0.a7gxmqk.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

  return {
    props: {
      meetups: meetups?.map(meetup => {
               return {
                 title: meetup.title,
                 address: meetup.address,
                 image: meetup.image,
                 id: meetup._id.toString()
               } 
              })
    },
    revalidate: 1,
  };
};

// export async function getStaticProps() {
  
//   const client = await MongoClient.connect('mongodb+srv://kiko:foiegras25@cluster0.a7gxmqk.mongodb.net/meetups?retryWrites=true&w=majority');
//     const db = client.db();

//     const meetupsCollection = db.collection('meetups');

//     const meetups = meetupsCollection.find().toArray();
//     console.log(meetups);
//     client.close();

//   return {
//     props: {
//       meetups: meetups?.map(meetup => {
//        return {
//          title: meetup.title,
//          address: meetup.address,
//          image: meetup.image,
//          id: meetup._id.toString()
//        } 
//       })
//     },
//     revalidate: 1,
//   };
// };


export default HomePage;