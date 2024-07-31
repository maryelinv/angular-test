enum Status {
  pending,
  doing,
  missed,
  done
}
export default Status;

export const StatusDesc = {
  [Status.pending]: 'Pending',
  [Status.doing]: 'Doing',
  [Status.missed]: 'Missed',
  [Status.done]: 'Done'
};
