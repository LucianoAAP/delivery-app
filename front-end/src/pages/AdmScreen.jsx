import React from 'react';
import AdmHeader from '../components/AdmHeader';
import AdmInputs from '../components/AdmInputs';
import AdmTable from '../components/AdmTable';
import { MainTag } from '../global-styles/globalComponents';

const AdmScreen = () => (
  <MainTag>
    <AdmHeader />
    <AdmInputs />
    <AdmTable />
  </MainTag>
);

export default AdmScreen;
