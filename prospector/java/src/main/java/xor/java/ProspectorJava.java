package xor.java;

import playn.java.LWJGLPlatform;

import xor.core.Prospector;

public class ProspectorJava {

  public static void main (String[] args) {
    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    // use config to customize the Java platform, if needed
    LWJGLPlatform plat = new LWJGLPlatform(config);
    new Prospector(plat);
    plat.start();
  }
}
