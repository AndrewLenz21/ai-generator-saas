'use client';
import React from 'react'

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

function CrispChat() {
    useEffect(() => {
        Crisp.configure("cda558f5-ea1c-418f-9182-49d4145e8b5c");
      }, []);
    
      return null;
}

export default CrispChat
