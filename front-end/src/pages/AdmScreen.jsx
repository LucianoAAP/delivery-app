import React from 'react';
import { useCheckLogin } from '../hooks';
import { AdmHeader, AdmInputs, AdmTable } from '../components';
import { MainTag } from '../global-styles/globalComponents';

const AdmScreen = () => {
  useCheckLogin('administrator');

  return (
    <MainTag>
      <AdmHeader />
      <AdmInputs />
      <AdmTable />
    </MainTag>
  );
};

export default AdmScreen;
