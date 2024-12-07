import { useState } from "react";

type Errors = {
  name?: string;
  description?: string;
  price?: string;
  brand?: string;
  sizes?: string;
  image?: string;
};

const useFormValidation = (
  name: string,
  description: string,
  price: string | number,
  brand: string,
  sizes: string[],
  image1: File | null,
  image2: File | null
) => {
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = () => {
    const newErrors: Errors = {};
    let isValid = true;

    if (!name) {
      newErrors.name = "* Nom du produit est requis";
      isValid = false;
    }
    if (!description) {
      newErrors.description = "* Description est requise";
      isValid = false;
    }
    if (!price) {
      newErrors.price = "* Prix est requis";
      isValid = false;
    }
    if (!brand) {
      newErrors.brand = "* Marque est requise";
      isValid = false;
    }
    if (sizes.length === 0) {
      newErrors.sizes = "* Au moins une taille est requise";
      isValid = false;
    }
    if (!image1 && !image2) {
      newErrors.image = "* Au moins une image est requise";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return { errors, validateForm };
};

export default useFormValidation;
