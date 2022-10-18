export const HelpAuth = (props) => {
  props.userName = props.userName.toUpperCase();
  props.password = props.password.toUpperCase();
  return props;
};
