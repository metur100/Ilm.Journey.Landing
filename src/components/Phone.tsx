/** A screenshot inside a simple phone frame. Without a screenshot, the app icon is shown on a night background. */
export function Phone({
  src,
  alt,
  className,
  eager,
  placeholder,
}: {
  src?: string;
  alt: string;
  className?: string;
  eager?: boolean;
  placeholder?: string;
}) {
  return (
    <div className={`phone${className ? ` ${className}` : ''}`}>
      {src ? (
        <img src={src} alt={alt} width={540} height={960} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      ) : placeholder ? (
        <div className="phone-placeholder">
          <img src={placeholder} alt="" width={256} height={256} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        </div>
      ) : null}
    </div>
  );
}
