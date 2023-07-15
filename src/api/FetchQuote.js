import React, { useState, useEffect } from 'react';

function FetchQuote() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
