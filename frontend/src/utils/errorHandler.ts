export const errorHandler = (error: any) => {
  let message = error.message || 'Error';
  let status = (error.response && error.response.status) || 500;
  let errors =
    (error.response && error.response.data && error.response.data.error) || {};
  return { message, status, errors };
};
