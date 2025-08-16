import React from 'react';
import { render, screen } from '@testing-library/react';
import ExamCard from './ExamCard';

describe('ExamCard', () => {
  it('renders exam card with correct content', () => {
    render(<ExamCard />);
    
    expect(screen.getByText('EXAMS TIME')).toBeInTheDocument();
    expect(screen.getByText(/Here we are, Are you ready to fight/)).toBeInTheDocument();
    expect(screen.getByText(/Nothing happens until something moves/)).toBeInTheDocument();
    expect(screen.getByText('View exams tips')).toBeInTheDocument();
  });

  it('renders Albert Einstein quote', () => {
    render(<ExamCard />);
    
    expect(screen.getByText(/Albert Einstein/)).toBeInTheDocument();
  });

  it('has a clickable button', () => {
    render(<ExamCard />);
    
    const button = screen.getByRole('button', { name: /View exams tips/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
