import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from 'mongodb';
import Head from 'next/head';


const MeetupDetails = (props) => {
  const data = props.meetupData;
  return <>
  <Head>
    <title>{data.title}</title>
    <meta
      name='description'
      content={data.description}
    />
  </Head>
  <MeetupDetail 
    image={data.image}
    title={data.title}
    address={data.address}
    description={data.description}/>
  </>
};

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://kiko:foiegras25@cluster0.a7gxmqk.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({
      params:{meetupId: meetup._id.toString()}
    })),
  };
};

export async function getStaticProps (context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://kiko:foiegras25@cluster0.a7gxmqk.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetups = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

  client.close();

  // console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        image: selectedMeetups.image,
        description: selectedMeetups.description

      },
    }
  }
};

export default MeetupDetails;