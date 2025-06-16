export default function Project({ project }) {
  return (
    <div className="card-xs md:card-sm w-full bg-base-100 shadow-sm md:w-fit">
      <figure className="h-56 overflow-hidden">
        {project?.image && <img src={project?.image} alt={project?.title} />}
        {project?.video && (
          <iframe src={project?.video} className="h-full w-full"></iframe>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project?.title}</h2>
        <p>{project?.description}</p>
        <div className="card-actions justify-end">
          <a
            href={project?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
