import { useState } from "react";

const useForm = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);

  return {
    currentStep,
    currentComponent: steps[currentStep],
  };
};

export default useForm;
