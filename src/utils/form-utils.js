import React, {useEffect} from "react"
import { useFormikContext } from "formik"

import scrollToRef from "./scrollto"

export const useFocusOnError = ({fieldRef, name}) => {
  const formik = useFormikContext();
  const prevSubmitCountRef = React.useRef(formik.submitCount);
  const firstErrorKey = Object.keys(formik.errors)[0];
  
  useEffect(() => {
    if (prevSubmitCountRef.current !== formik.submitCount && !formik.isValid) {
      if (fieldRef.current && firstErrorKey === name) {
        fieldRef.current.focus();
        scrollToRef(fieldRef)
      }
    }
    prevSubmitCountRef.current = formik.submitCount;
  }, [formik.submitCount, formik.isValid, firstErrorKey]);
};