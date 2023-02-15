export default function addUserPortrait() {
  const user = app.session.user.data.attributes;

  return (
    <div class="pg-user-portrait">
      <div class="pg-user-portrait-avatar">
        {user.avatarUrl && (<img src={user.avatarUrl} />)}
        {!user.avatarUrl && (<span>{user.displayName[0]}</span>)}
      </div>

      <div className="pg-user-portrait-username">
        <span>{app.translator.trans('peruguitar-user-portrait.forum.welcome_back_label')},</span>
        <span>{user.displayName}</span>
      </div>
    </div>
  );
}
