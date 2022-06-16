import React from 'react';
import styles from '../styles/Result.module.css'
import { useRouter } from 'next/router'
import Statistic from '../components/Statistic'
import Button from '../components/Button';
import Title from '../components/Title';

const Result: React.FC = () => {

  const router = useRouter()

  const total = +router.query.total
  const correct = +router.query.correct
  const percentage = Math.round((correct / total) * 100)

  return (
    <div className={styles.result}>
      <Title>Resultado</Title>
      <div className={styles.statistics}>
        <Statistic text='Perguntas' value={total} />
        <Statistic text='Acertos' value={correct} />
        <Statistic text='Percentual' value={`${percentage}%`} />
      </div>
      <Button href='/' backgroundColor='#fe1e50'>
        Tentar novamente
      </Button>
    </div>
  );
}

export default Result;