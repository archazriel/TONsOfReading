import React from 'react';

import Icon from '@views/parts/icon';

import styles from './styles.scss';
import StartReadingForm from './form';

function CreateDeal() {
  return (
    <div className="create-deal">
      <style jsx>{styles}</style>
      <div className="icon-container">
        <Icon color="#11C696" />
      </div>
      <h1 className="section-title"> Start Reading </h1>

      <StartReadingForm />
    </div>
  );
}

export default CreateDeal;
