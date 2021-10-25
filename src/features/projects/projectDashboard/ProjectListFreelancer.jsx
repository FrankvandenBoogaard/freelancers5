export default function ProjectListFreelancer({freelancer}) {
  return (<img
    key={freelancer.freelancerEmail}
    className='inline-block h-6 w-6 rounded-full ring-2 ring-white'
    src={freelancer.freelancerImageUrl}
    alt={freelancer.freelancerName}
  />);
}
