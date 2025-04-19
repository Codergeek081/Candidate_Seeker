export default function Card({user}: {user:any}) {
    return (
      <div className="col-md-4">
        {/* 🟦 FIXED: Clean card structure with image and content inside the same .card */}
        <div className="card bg-dark text-white shadow rounded-4 overflow-hidden">
          <img
            src={user.avatar_url}
            alt="Candidate"
            className="card-img-top"
          />
          {user && <div className="card-body">
            <h4 className="card-title">
              <strong>{user.login}</strong>{' '}
              <em>({user.login})</em>
            </h4>
  
            <p className="card-text"><strong>Location:</strong> {user?.location}</p>
            <p className="card-text"><strong>Email:</strong> {user?.email}</p>
            <p className="card-text"><strong>Company:</strong> {user?.company}</p>
            <p className="card-text"><strong>Bio:</strong> {user?.bio}</p>
          </div>}
        </div>
      </div>
    )
  }