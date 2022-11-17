import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h2> THIS IS AN REACT COURSE PROJECT</h2>
        <p>This is an react app to leave feedback</p>
        <p> Version: 1.0.0</p>
        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
