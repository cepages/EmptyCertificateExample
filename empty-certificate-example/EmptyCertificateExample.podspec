
  Pod::Spec.new do |s|
    s.name = 'EmptyCertificateExample'
    s.version = '0.0.1'
    s.summary = 'Project to show the resources are not working'
    s.license = 'MIT'
    s.homepage = 'https://github.com/cepages/EmptyCertificateExample'
    s.author = 'Carlos'
    s.source = { :git => 'https://github.com/cepages/EmptyCertificateExample', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end