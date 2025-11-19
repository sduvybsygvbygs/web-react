export default function EmployeeCard({ user }) {
    return (
        <article className="employee-card">
            <img className="employee-card__photo" src={`https://i.pravatar.cc/320?u=${user.id}`} alt="" />
            <div className="employee-card__body">
                <h3 className="employee-card__name">{user.name}</h3>
                <p className="employee-card__role">
                    {user.company?.name || '-'} • {user.company?.catchPhrase || ''}
                </p>
            </div>
            <div className="employee-card__meta">
                <span>{user.email}</span>
                <a href={`tel:${user.phone}`}>Подзвонити</a>
            </div>
        </article>
    );
}